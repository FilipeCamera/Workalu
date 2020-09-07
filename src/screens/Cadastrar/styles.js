import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #fff;
`;

export const Title = styled.Text`
  font-family: 'Cairo-Bold';
  font-size: 20px;
  color: #666666;
  margin: 15px 0 10px;
`;

export const BoxButton = styled.View`
  width: 80%;
  height: 40px;
  flex-direction: row;
  margin: 10px 0;
`;

export const ButtonServico = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: ${(props) => (props.selected == true ? '#1F8299' : '#F2F2F2')};
`;

export const ServicoText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 14px;
  color: ${(props) => (props.selected == true ? '#F2F2F2' : '#4D4D4D')};
`;

export const ButtonVaga = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: ${(props) => (props.selected == true ? '#1F8299' : '#F2F2F2')};
`;

export const VagaText = styled.Text`
  font-family: 'Cairo-SemiBold';
  font-size: 14px;
  color: ${(props) => (props.selected == true ? '#F2F2F2' : '#4D4D4D')};
`;
