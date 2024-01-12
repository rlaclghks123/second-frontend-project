import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { orderListAtom } from '../atoms/orderListAtom';

function OrderItem({ id, name, price, event, materialType }) {
  const setOrderState = useSetRecoilState(orderListAtom);

  const updateOrderState = (id, isUpdate, updateValue) => (prev) => {
    return prev.map((prevOrderItem) => {
      if (prevOrderItem.id === id && isUpdate) {
        return {
          ...prevOrderItem,
          materialType: updateValue,
        };
      }
      return prevOrderItem;
    });
  };

  const handleMinus = (e) => {
    const id = e.target.closest('li').dataset.id;
    setOrderState(updateOrderState(id, materialType > 0, materialType - 1));
  };

  const handlePlus = (e) => {
    const id = e.target.closest('li').dataset.id;
    setOrderState(updateOrderState(id, materialType < 999, materialType + 1));
  };

  return (
    <Li data-id={id} $materialtype={materialType}>
      <Img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhUsUCitNubnAEPdntodXUM6idJzHrh9pbH52LrsWHZLDwYhs6GPL&usqp=CAE&s"
        alt="이미지 사진"
      ></Img>
      <OrderItemMain>
        <OrderItemMainHeader>
          <OrderItemMainHeaderTitle>{name}</OrderItemMainHeaderTitle>
          {event > 0 && <OrderItemMainHeaderEventBox>{'이벤트'}</OrderItemMainHeaderEventBox>}
        </OrderItemMainHeader>

        <OrderItemMainFooter>
          <OrderItemAddBox>
            <span>
              <button onClick={handleMinus}>-</button>
            </span>
            <span>{materialType}</span>
            <span>
              <button onClick={handlePlus}>+</button>
            </span>
          </OrderItemAddBox>
          <div>{`${price.toLocaleString()}원`}</div>
        </OrderItemMainFooter>
      </OrderItemMain>
    </Li>
  );
}

export default OrderItem;

const Li = styled.li`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  height: 50px;
  padding: 10px;
  margin: 15px;
  background: ${(props) => (props.$materialtype ? 'rgba(247, 90, 47, 0.10)' : 'inherit')};
`;

const Img = styled.img`
  width: inherit;
  height: inherit;
  margin-right: 10px;
`;

const OrderItemMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
  width: 100%;
`;

const OrderItemMainHeader = styled.div`
  display: flex;
  align-items: center;
`;

const OrderItemMainHeaderTitle = styled.div`
  height: 22px;
  flex-shrink: 0;
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const OrderItemMainHeaderEventBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  width: 53px;
  height: 23px;

  border-radius: 10px;
  background: #f75a2f;
  color: #fff;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
`;

const OrderItemMainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderItemAddBox = styled.div`
  display: flex;
  align-items: center;

  span {
    min-width: 19px;
    height: 22px;
    flex-shrink: 0;
    color: #000;

    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: inherit;
    border: none;
    cursor: pointer;
  }
`;
