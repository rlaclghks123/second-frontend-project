import styled from 'styled-components';
import MessageDisplay from '../components/MessageDisplay';
import checkSvg from '../svg/check.svg';

function CompletePage() {
  return (
    <MessageDisplay>
      <Section>
        <img src={checkSvg} alt="check Img" />
      </Section>
      <Section>주문이 완료되었습니다.</Section>
    </MessageDisplay>
  );
}

export default CompletePage;

const Section = styled.section`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
