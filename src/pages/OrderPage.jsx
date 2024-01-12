import styled from 'styled-components';
import WebViewLayout from '../layout/WebViewLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useRecoilState } from 'recoil';
import { orderListAtom } from '../atoms/orderListAtom';
import { useQuery } from 'react-query';
import { orderList } from '../api/orderList';
import OrderItem from '../components/OrderItem';

function OrderPage() {
  const [orderState, setOrderState] = useRecoilState(orderListAtom);

  const { isLoading, error } = useQuery('orderList', orderList, {
    onSuccess: (data) => setOrderState(data),
  });

  return (
    <WebViewLayout>
      <Wrapper>
        <Header />

        <Main>
          {error && (
            <LoadingWrapper>
              <LoadingSection>데이터를 읽어오던 중</LoadingSection>
              <LoadingSection>문제가 발생했습니다.</LoadingSection>
              <LoadingSection>잠시 후 다시 시도해주세요.</LoadingSection>
            </LoadingWrapper>
          )}

          {isLoading && (
            <LoadingWrapper>
              <LoadingSection>목록을</LoadingSection>
              <LoadingSection>불러오고 있습니다.</LoadingSection>
            </LoadingWrapper>
          )}

          {!isLoading && (
            <OrderItemWrapper>
              {orderState.map((item) => (
                <OrderItem key={item.id} {...item} />
              ))}
            </OrderItemWrapper>
          )}
        </Main>
      </Wrapper>
      <Footer orderState={orderState} />
    </WebViewLayout>
  );
}

export default OrderPage;

const Wrapper = styled.div`
  width: inherit;
  min-height: 864px;
`;

const Main = styled.main`
  width: inherit;
  height: inherit;
  margin-top: 57px;
  margin-bottom: 170px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 864px;
`;

const LoadingSection = styled.section`
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

const OrderItemWrapper = styled.ul`
  width: 100%;
  height: 100%;
  padding: 5px 0px;
`;
