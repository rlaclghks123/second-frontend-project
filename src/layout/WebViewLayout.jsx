import styled from 'styled-components';

function WebViewLayout({ children }) {
  return (
    <Wrapper>
      <CenterContentBox>{children}</CenterContentBox>
    </Wrapper>
  );
}

export default WebViewLayout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContentBox = styled.div`
  width: 350px;
  height: 864px;
  background-color: white;
`;
