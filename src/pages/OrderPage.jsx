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
