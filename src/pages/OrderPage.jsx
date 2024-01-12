import styled from 'styled-components';
import WebViewLayout from '../layout/WebViewLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useRecoilState } from 'recoil';
import { orderListAtom } from '../atoms/orderListAtom';
import { useQuery } from 'react-query';
import { orderList } from '../api/orderList';

function OrderPage() {
  const [orderState, setOrderState] = useRecoilState(orderListAtom);

  const { isLoading, error } = useQuery('orderList', orderList, {
    onSuccess: (data) => setOrderState(data),
  });

  console.log(orderState);

  return (
    <WebViewLayout>
      <Wrapper>
        <Header />

        <Main>
          {error && (
            <LoadingWrapper>
              <Section>데이터를 읽어오던 중</Section>
              <Section>문제가 발생했습니다.</Section>
            </LoadingWrapper>
          )}

          {isLoading && (
            <LoadingWrapper>
              <Section>목록을</Section>
              <Section>불러오고 있습니다.</Section>
            </LoadingWrapper>
          )}
        </Main>
      </Wrapper>
      <Footer />
    </WebViewLayout>
  );
}

export default OrderPage;

const Wrapper = styled.div`
  width: inherit;
  height: inherit;
`;

const Main = styled.main`
  width: inherit;
  height: inherit;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: inherit;
  height: inherit;
`;

const Section = styled.section`
  width: 221px;
  height: 45px;
  flex-shrink: 0;
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
