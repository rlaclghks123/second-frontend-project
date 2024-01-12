import styled from 'styled-components';
import logoSmallSvg from '../svg/logo-small.svg';
import WebViewLayout from '../layout/WebViewLayout';

function OrderPage() {
  return (
    <WebViewLayout>
      <Wrapper>
        <Header>
          <Img src={logoSmallSvg} alt="logo Img" />
        </Header>
      </Wrapper>
    </WebViewLayout>
  );
}

export default OrderPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: inherit;
  height: inherit;
`;

const Header = styled.header`
  position: fixed;
  top: 1px;
  z-index: 99;

  width: 350px;
  height: 57px;

  flex-shrink: 0;
  background: #000;
`;

const Img = styled.img`
  margin: 12px;
`;
