import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/actions';
import styled from 'styled-components';
import moonLogo from '../images/icon-moon.svg';
import sunLogo from '../images/icon-sun.svg';

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.reducer);

  return (
    <Wrapper>
      <h1>TODO</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(toggleTheme());
          if (theme) {
            document.documentElement.className = 'dark-theme';
          } else {
            document.documentElement.className = 'light-theme';
          }
        }}
      >
        {theme ? (
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

  h1 {
    color: #fff;
    letter-spacing: 10px;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 70px 0 40px 0;
    h1 {
      font-size: 40px;
      letter-spacing: 15px;
    }
  }
`;
export default Header;
