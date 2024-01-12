import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WebViewLayout from '../layout/WebViewLayout';

function MessageDisplay({ redirectUrl, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(redirectUrl);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <WebViewLayout>
      <Wrapper>{children}</Wrapper>
    </WebViewLayout>
  );
}

export default MessageDisplay;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: inherit;
  min-height: 864px;
`;
