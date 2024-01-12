import styled from 'styled-components';
import WebViewLayout from '../layout/WebViewLayout';
import Header from '../components/Header';

function OrderPage() {
  return (
    <WebViewLayout>
      <Wrapper>
        <Header />
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
