import styled from 'styled-components';
import logoSmallSvg from '../svg/logo-small.svg';

function Header() {
  return (
    <HeaderWrapper>
      <Img src={logoSmallSvg} alt="logo Img" />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 1px;
  z-index: 99;

  width: 350px;
  height: 57px;

  flex-shrink: 0;
  background: #000;
`;

const Img = styled.img`
  margin: 12px;
`;
