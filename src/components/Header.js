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

const Wrapper = styled.header`
  padding: 48px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow);

  h1 {
    color: var(--primary-color);
    letter-spacing: 10px;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;
export default Header;
