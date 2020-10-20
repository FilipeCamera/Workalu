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
  CardBoxPreco,
  PrecoTitle,
  PrecoDesc,
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
  CardInstagram,
  TextInsta,
  InstaButton,
} from "./styles";

import ModalFilter from "../../components/ModalFilter";

import firestore from "@react-native-firebase/firestore";

import admob, {
  MaxAdContentRating,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
} from "@react-native-firebase/admob";

import { Linking } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";

import Header from "../../components/Header";

export default function Servicos() {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [nomeServico, setNomeServico] = useState("");
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

  const doc = firestore().collection("servicos");

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
            nomeServico,
            whatsapp,
            instagram,
            tagsData,
            valorInicial,
            valorFinal,
            cidade,
            uf,
          } = doc.data();
          list.push({
            id: doc.id,
            categoria,
            nome,
            nomeServico,
            whatsapp,
            instagram,
            tagsData,
            valorInicial,
            valorFinal,
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

  function filterData(nomeServico, categoria, uf, endereco) {
    const newData = data.filter((obj) => {
      if (categoria == "" && nomeServico == "" && endereco == "" && uf == "") {
        return obj.categoria.toLowerCase() != categoria.toLowerCase();
      } else if (
        categoria != "" &&
        nomeServico == "" &&
        endereco == "" &&
        uf == ""
      ) {
        return obj.categoria.toLowerCase() == categoria.toLowerCase();
      } else if (
        categoria != "" &&
        nomeServico != "" &&
        endereco == "" &&
        uf == ""
      ) {
        return (
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.nomeServico.toLowerCase() == nomeServico.toLowerCase()
        );
      } else if (
        categoria != "" &&
        nomeServico == "" &&
        endereco != "" &&
        uf == ""
      ) {
        return (
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase()
        );
      } else if (
        categoria != "" &&
        nomeServico == "" &&
        endereco == "" &&
        uf != ""
      ) {
        return (
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (
        categoria != "" &&
        nomeServico == "" &&
        endereco != "" &&
        uf != ""
      ) {
        return (
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (
        categoria != "" &&
        nomeServico != "" &&
        endereco != "" &&
        uf == ""
      ) {
        return (
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.nomeServico.toLowerCase() == nomeServico.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase()
        );
      } else if (
        categoria != "" &&
        nomeServico != "" &&
        endereco == "" &&
        uf != ""
      ) {
        return (
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.nomeServico.toLowerCase() == nomeServico.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (
        categoria != "" &&
        nomeServico != "" &&
        endereco != "" &&
        uf != ""
      ) {
        return (
          obj.categoria.toLowerCase() == categoria.toLowerCase() &&
          obj.nomeServico.toLowerCase() == nomeServico.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (
        categoria == "" &&
        nomeServico != "" &&
        endereco == "" &&
        uf == ""
      ) {
        return obj.nomeServico.toLowerCase() == nomeServico.toLowerCase();
      } else if (
        categoria == "" &&
        nomeServico != "" &&
        endereco != "" &&
        uf == ""
      ) {
        return (
          obj.nomeServico.toLowerCase() == nomeServico.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase()
        );
      } else if (
        categoria == "" &&
        nomeServico != "" &&
        endereco == "" &&
        uf != ""
      ) {
        return (
          obj.nomeServico.toLowerCase() == nomeServico.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (
        categoria == "" &&
        nomeServico != "" &&
        endereco != "" &&
        uf != ""
      ) {
        return (
          obj.nomeServico.toLowerCase() == nomeServico.toLowerCase() &&
          obj.cidade.toLowerCase() == endereco.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      } else if (
        categoria == "" &&
        nomeServico == "" &&
        endereco != "" &&
        uf == ""
      ) {
        return obj.cidade.toLowerCase() == endereco.toLowerCase();
      } else if (
        categoria == "" &&
        nomeServico == "" &&
        endereco == "" &&
        uf != ""
      ) {
        return obj.uf.toLowerCase() == uf.toLowerCase();
      } else if (
        categoria == "" &&
        nomeServico == "" &&
        endereco != "" &&
        uf != ""
      ) {
        return (
          obj.cidade.toLowerCase() == endereco.toLowerCase() &&
          obj.uf.toLowerCase() == uf.toLowerCase()
        );
      }
    });
    setDataFilter(newData);
  }

  return (
    <Container>
      <ModalFilter
        categoria={categoria}
        setCategoria={setCategoria}
        nomeServico={nomeServico}
        setNomeServico={setNomeServico}
        uf={uf}
        setUf={setUf}
        endereco={endereco}
        setEndereco={setEndereco}
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
            <TagsTitle>{nomeServico}</TagsTitle>
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
                <CardTitle>{item.nomeServico}</CardTitle>
                <CardBoxName>
                  <CardName>Nome:</CardName>
                  <CardNameDesc>{item.nome}</CardNameDesc>
                </CardBoxName>
                <CardBoxPreco>
                  <PrecoTitle>Valor do serviço:</PrecoTitle>
                  <PrecoDesc>
                    R${item.valorInicial} - R${item.valorFinal}
                  </PrecoDesc>
                </CardBoxPreco>
                <CardBoxLocation>
                  <LocationTitle>Localização:</LocationTitle>
                  <LocationDesc>
                    {item.cidade}, {item.uf}
                  </LocationDesc>
                </CardBoxLocation>
                <CardInstagram>
                  <Icon2 name="instagram" size={22} color="#0A2B33" />
                  <InstaButton
                    onPress={() => {
                      Linking.openURL(
                        `instagram://user?username=${item.instagram}`
                      );
                    }}
                  >
                    <TextInsta>@{item.instagram}</TextInsta>
                  </InstaButton>
                </CardInstagram>
                <CardBoxTags>
                  {item.tagsData.map((item, index) => {
                    return (
                      <BoxTags key={index}>
                        <TagsTitle>{item}</TagsTitle>
                      </BoxTags>
                    );
                  })}
                </CardBoxTags>
                <ButtonWhats
                  onPress={() => {
                    Linking.openURL(`whatsapp://send?phone=55${item.whatsapp}`);
                  }}
                >
                  <Icon2 name="whatsapp" size={25} color="#FFF" />
                  <TextWhats>Chamar no Whatsapp</TextWhats>
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
