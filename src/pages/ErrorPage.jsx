import styled from 'styled-components';
import MessageDisplay from '../components/MessageDisplay';

function ErrorPage() {
  return (
    <MessageDisplay redirectUrl={'/order'}>
      <Section>주문에 실패하였습니다.</Section>
      <Section>다시 시도해주세요.</Section>
    </MessageDisplay>
  );
}

export default ErrorPage;

const Section = styled.section`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
