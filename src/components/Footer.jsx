import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <OrderSummary>
        <p>{`총 수량 : ${0}개`}</p>
      </OrderSummary>
      <OrderSummary>
        <p>{`총 가격 : ${0}원`}</p>
      </OrderSummary>
      <div>
        <Button>주문하기</Button>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
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
  width: 100%;
  display: flex;
  justify-content: end;

  p {
    width: 166px;
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
  width: 301px;
  height: 47.919px;
  flex-shrink: 0;

  margin-top: 18.46px;
  border: none;
  background: #c1c1c1;
  color: white;
`;
