import styled from 'styled-components';
import MessageDisplay from '../components/MessageDisplay';

function NotFoundPage() {
  return (
    <MessageDisplay redirectUrl={'/'}>
      <Section>잘못된 접근 입니다.</Section>
    </MessageDisplay>
  );
}

export default NotFoundPage;

const Section = styled.section`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
