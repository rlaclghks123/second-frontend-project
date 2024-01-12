import styled from 'styled-components';
import WebViewLayout from '../layout/WebViewLayout';
import logoSvg from '../svg/logo.svg';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <WebViewLayout>
      <Wrapper>
        <Main>
          <img src={logoSvg} alt="logo Img" />
          <Button to="/order">주문하러 가기</Button>
        </Main>
      </Wrapper>
    </WebViewLayout>
  );
}

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: inherit;
  height: inherit;

  background-color: #000000;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: inherit;

  color: white;
`;

const Button = styled(Link)`
  padding: 25px;
  margin: 25px;
  border-radius: 10px;

  color: #000000;
  background-color: white;

  font-family: Inter;
  font-weight: 400;
  font-size: 25px;
  line-height: 30.26px;
  text-align: center;
`;
