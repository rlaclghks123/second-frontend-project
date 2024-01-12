import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Footer({ orderState }) {
  const navigate = useNavigate();
  const [totalCnt, setTotalCnt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPayment, setIsPayment] = useState(false);
  const [loadPayment, setLoadPayment] = useState(false);

  useEffect(() => {
    setTotalCnt(() => orderState.map((item) => item.materialType).reduce((a, c) => a + c, 0));
    setTotalPrice(() => {
      const priceList = orderState.map((item) => item.price);
      const cntList = orderState.map((item) => item.materialType);

      return priceList.reduce((a, c, idx) => a + c * cntList[idx], 0);
    });
  }, [orderState]);

  useEffect(() => {
    setIsPayment(() => {
      return totalCnt === 0 ? true : false;
    });
  }, [totalPrice]);

  const handlePayment = () => {
    setLoadPayment(true);
    setIsPayment(true);
    navigate('/complete');
  };

  return (
    <FooterWrapper>
      <OrderSummary>
        <p>{`총 수량 : ${totalCnt}개`}</p>
      </OrderSummary>
      <OrderSummary>
        <p>{`총 가격 : ${totalPrice.toLocaleString()}원`}</p>
      </OrderSummary>
      <div>
        <Button $isPayment={isPayment} disabled={isPayment} onClick={handlePayment}>
          {loadPayment ? '로딩중...' : '주문하기'}
        </Button>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  @media (max-width: 350px) {
    width: 280px;
  }

  position: fixed;
  bottom: 0px;
  box-sizing: border-box;

  width: 350px;
  height: 170px;
  flex-shrink: 0;

  padding: 20px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;

  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
`;

const OrderSummary = styled.div`
  display: flex;
  justify-content: end;

  p {
    height: 26.242px;
    flex-shrink: 0;

    color: #000;

    text-align: right;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Button = styled.button`
  @media (max-width: 350px) {
    width: 240px;
  }

  width: 301px;
  height: 47.919px;
  flex-shrink: 0;

  margin-top: 18.46px;
  border: none;
  color: white;
  background-color: ${(props) => (props.$isPayment ? '#c1c1c1' : '#000000')};
  cursor: ${(props) => (props.$isPayment ? 'not-allowed' : 'pointer')};
`;
