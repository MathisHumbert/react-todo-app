import React from 'react';
import styled from 'styled-components';
import moonLogo from '../images/icon-moon.svg';
import sunLogo from '../images/icon-sun.svg';

const Header = () => {
  const baseTheme = true;
  return (
    <Wrapper>
      <h1>TODO</h1>
      <button type="button">
        {baseTheme ? (
          <img src={moonLogo} alt="moon-logo" />
        ) : (
          <img src={sunLogo} alt="sun-logo" />
        )}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.header``;
export default Header;
