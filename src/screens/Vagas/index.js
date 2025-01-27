import React, { useState, useEffect } from "react";

import {
  Container,
  Scroll,
  BannerView,
  BoxSearchFilter,
  SearchBar,
  Search,
  ButtonFilter,
  BoxCard,
  CardTitle,
  CardBoxName,
  CardName,
  CardNameDesc,
  CardBoxLocation,
  LocationTitle,
  LocationDesc,
  CardBoxTags,
  BoxTags,
  TagsTitle,
  ButtonWhats,
  TextWhats,
  BoxTagsFilter,
  ShowIndicator,
  CardDesc,
  DescTitle,
  Desc,
} from "./styles";

import ModalFilterVaga from "../../components/ModalFilterVaga";

import firestore from "@react-native-firebase/firestore";

import admob, {
  MaxAdContentRating,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
} from "@react-native-firebase/admob";

import Icon from "react-native-vector-icons/AntDesign";

import Header from "../../components/Header";

import Modal from "../../components/Modal";

export default function Vagas() {
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleM, setVisibleM] = useState(false);
  const [nomeVaga, setNomeVaga] = useState("");
  const [categoria, setCategoria] = useState("");
  const [uf, setUf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);

  const interstitial = InterstitialAd.createForAdRequest(
    "ca-app-pub-4288571417280592/7045024619",
    {
      requestNonPersonalizedAdsOnly: true,
    }
  );

  const doc = firestore().collection("vagas");

  useEffect(() => {
    interstitial.load();
    const eventListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        interstitial.show();
      }
    });
    async function LoadServico() {
      await doc.onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          const {
            categoria,
            nome,
            nomeVaga,
            descVaga,
            email,
            tagsData,
            cidade,
            uf,
          } = doc.data();
          list.push({
            id: doc.id,
            categoria,
            nome,
            nomeVaga,
            descVaga,
            email,
            tagsData,
            cidade,
            uf,
          });
        });
        setData(list);
        setDataFilter(list);
      });
    }
    LoadServico();
    admob()
      .setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {});
    return () => {
      eventListener();
    };
  }, []);

  function search(e) {
    setDataFilter(
      data.filter((p) => p.nomeServico.toLowerCase().includes(e.toLowerCase()))
    );
  }

  function filterData(nomeVaga, categoria, uf, endereco) {
    const newData = data.filter((obj) => {
      if (categoria == "" && nomeVaga == "" && endereco == "" && uf == "") {
        return obj.categoria.toLowerCase() != categoria.toLowerCase();
      } else if (
        (categoria != "" && endereco != "") ||
        (categoria != "" && uf != "")
      ) {
        return (
          (obj.categoria.toLowerCase() == categoria.toLowerCase() &&
            obj.cidade.toLowerCase() == endereco.toLowerCase()) ||
          (obj.categoria.toLowerCase() == categoria.toLowerCase() &&
            obj.uf.toLowerCase() == uf.toLowerCase())
        );
      } else if (endereco != "" && uf != "") {
        return (
          obj.cidade.toLowerCase() == endereco.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (nomeVaga != "" && categoria != "" && endereco != "") {
        return (
          obj.nomeVaga.toLowerCase() == nomeVaga.toLowerCase() &&
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase()
        );
      } else if (nomeVaga != "" && categoria != "" && uf != "") {
        return (
          obj.nomeVaga.toLowerCase() == nomeVaga.toLowerCase() &&
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (nomeVaga != "" && categoria != "") {
        return (
          obj.nomeVaga.toLowerCase() == nomeVaga.toLowerCase() &&
          obj.categoria.toLowerCase() == categoria.toLowerCase()
        );
      } else if (nomeVaga != "" && endereco != "") {
        return (
          obj.nomeVaga.toLowerCase() == nomeVaga.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase()
        );
      } else if (nomeVaga != "" && uf != "") {
        return (
          obj.nomeVaga.toLowerCase() == nomeVaga.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      }
      return (
        obj.categoria.toLowerCase() == categoria.toLowerCase() ||
        obj.cidade.toLowerCase() == endereco.toLowerCase() ||
        obj.uf.toLowerCase() == uf.toLowerCase() ||
        obj.nomeVaga.toLowerCase() == nomeVaga.toLowerCase()
      );
    });
    setDataFilter(newData);
  }

  return (
    <Container>
      <ModalFilterVaga
        categoria={categoria}
        setCategoria={setCategoria}
        nomeVaga={nomeVaga}
        uf={uf}
        setUf={setUf}
        endereco={endereco}
        setEndereco={setEndereco}
        setNomeVaga={setNomeVaga}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        filterData={filterData}
      />
      <Scroll
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#0A2B33",
          alignItems: "center",
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <BoxSearchFilter>
          <SearchBar>
            <Icon
              style={{ marginLeft: 5 }}
              name="search1"
              size={18}
              color="#155766"
            />
            <Search
              value={textSearch}
              placeholder="Pesquisar..."
              onChangeText={(e) => {
                search(e);
                setTextSearch(e);
              }}
              clearTextOnFocus={true}
              onFocus={() => {
                setTextSearch("");
                search("");
              }}
            />
          </SearchBar>
          <ButtonFilter onPress={() => setModalVisible(true)}>
            <Icon name="filter" size={22} color="#E44545" />
          </ButtonFilter>
        </BoxSearchFilter>
        <BoxTagsFilter>
          <BoxTags>
            <TagsTitle>{categoria}</TagsTitle>
          </BoxTags>
          <BoxTags>
            <TagsTitle>{nomeVaga}</TagsTitle>
          </BoxTags>
          <BoxTags>
            <TagsTitle>{endereco}</TagsTitle>
          </BoxTags>
          <BoxTags>
            <TagsTitle>{uf}</TagsTitle>
          </BoxTags>
        </BoxTagsFilter>
        {dataFilter.length ? (
          dataFilter.map((item, index) => {
            return (
              <BoxCard key={index}>
                <CardTitle>{item.nomeVaga}</CardTitle>
                <CardBoxName>
                  <CardName>Empresa/Loja:</CardName>
                  <CardNameDesc>{item.nome}</CardNameDesc>
                </CardBoxName>
                <CardBoxLocation>
                  <LocationTitle>Localização:</LocationTitle>
                  <LocationDesc>
                    {item.cidade}, {item.uf}
                  </LocationDesc>
                </CardBoxLocation>
                <CardDesc>
                  <DescTitle>Descrição:</DescTitle>
                  <Desc>{item.descVaga}</Desc>
                </CardDesc>
                <CardBoxTags>
                  {item.tagsData.map((item, index) => {
                    return (
                      <BoxTags key={index}>
                        <TagsTitle>{item}</TagsTitle>
                      </BoxTags>
                    );
                  })}
                </CardBoxTags>
                <ButtonWhats onPress={() => setVisibleM(true)}>
                  <Modal
                    visible={visibleM}
                    setVisible={setVisibleM}
                    email={item.email}
                  />
                  <TextWhats>Estou Interessado</TextWhats>
                </ButtonWhats>
              </BoxCard>
            );
          })
        ) : (
          <ShowIndicator size="large" color="#E44545" />
        )}
      </Scroll>
      <BannerView>
        <BannerAd
          unitId="ca-app-pub-4288571417280592/4063638057"
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </BannerView>
    </Container>
  );
}
