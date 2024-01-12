import styled from 'styled-components';
import WebViewLayout from '../layout/WebViewLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OrderPage() {
  return (
    <WebViewLayout>
      <Wrapper>
        <Header />
      </Wrapper>
      <Footer />
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
