import styled from 'styled-components';
import WebViewLayout from '../layout/WebViewLayout';
import logoSvg from '../svg/logo.svg';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <WebViewLayout>
      <Wrapper>
        <Main>
          <Img src={logoSvg} alt="logo Img" />
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
  min-height: 864px;

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

const Img = styled.img`
  width: 150px;
  height: 51px;
  flex-shrink: 0;
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 172px;
  height: 88px;
  flex-shrink: 0;

  margin-top: 41px;
  border-radius: 20px;
  background: #fff;
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
