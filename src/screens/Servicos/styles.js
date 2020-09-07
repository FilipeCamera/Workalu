import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView``;

export const BannerView = styled.View``;

export const SearchBar = styled.View`
  height: 40px;
  width: 80%;
  background: #f2f2f2;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  flex-direction: row;
  align-items: center;
`;

export const Search = styled.TextInput`
  width: 80%;
  padding: 5px 0px 5px 15px;
  font-family: 'Cairo-Regular';
  font-size: 15px;
  color: #808080;
`;

export const BoxSearchFilter = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0;
`;

export const ButtonFilter = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const BoxCard = styled.View`
  width: 90%;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  border-radius: 10px;
  margin: 20px 0 10px;
  elevation: 1px;
`;

export const CardTitle = styled.Text`
  width: 90%;
  font-family: 'Cairo-Bold';
  font-size: 16px;
  color: #4d4d4d;
  margin: 5px 0;
`;
export const CardBoxName = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const CardName = styled.Text`
  font-family: 'Cairo-Regular';
  font-size: 14px;
`;

export const CardNameDesc = styled.Text`
  font-family: 'Cairo-Light';
  font-size: 14px;
  margin-left: 5px;
`;

export const CardBoxPreco = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const CardBoxTags = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const PrecoTitle = styled.Text`
  font-family: 'Cairo-Regular';
  font-size: 14px;
`;

export const PrecoDesc = styled.Text`
  font-family: 'Cairo-Light';
  font-size: 14px;
  margin-left: 5px;
`;

export const CardBoxLocation = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const LocationTitle = styled.Text`
  font-family: 'Cairo-Regular';
  font-size: 14px;
`;

export const LocationDesc = styled.Text`
  font-family: 'Cairo-Light';
  font-size: 14px;
  margin-left: 5px;
`;

export const BoxTags = styled.View`
  background: #155766;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
`;

export const TagsTitle = styled.Text`
  font-family: 'Cairo-Regular';
  color: #fff;
  font-size: 14px;
`;

export const ButtonWhats = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 46px;
  width: 90%;
  border-radius: 10px;
  background: #1F8299;
  margin: 5px 0 10px;
`;

export const TextWhats = styled.Text`
  font-family: 'Cairo-Regular';
  font-size: 15px;
  color: #fff;
`;

export const BoxTagsFilter = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px 0 0;
`;

export const TagsFilterButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const ShowIndicator = styled.ActivityIndicator`
  margin: 60px 0 0;
`;
