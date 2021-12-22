import React from 'react';
import { useSelector } from 'react-redux';
import lightMobileBcg from '../images/bg-mobile-light.jpg';
import lightDesktopBcg from '../images/bg-desktop-light.jpg';
import darkMobileBcg from '../images/bg-mobile-dark.jpg';
import darkDesktopBcg from '../images/bg-desktop-dark.jpg';
import styled from 'styled-components';

const BcgImages = () => {
  const { theme } = useSelector((state) => state.reducer);

  if (theme) {
    return (
      <>
        <Wrapper
          src={lightMobileBcg}
          alt="light-mobile-bcg"
          className="mobile"
        />
        <Wrapper
          src={lightDesktopBcg}
          alt="light-desktop-bcg"
          className="desktop"
        />
      </>
    );
  } else {
    return (
      <>
        <Wrapper src={darkMobileBcg} alt="dark-mobile-bcg" className="mobile" />
        <Wrapper
          src={darkDesktopBcg}
          alt="dark-desktop-bcg"
          className="desktop"
        />
      </>
    );
  }
};

const Wrapper = styled.img`
  position: absolute;
  width: 100%;
  z-index: -10;
  object-fit: cover;
  max-height: 200px;

  &.mobile {
    display: block;
  }

  &.desktop {
    display: none;
  }

  @media (min-width: 768px) {
    max-height: 300px;
    &.mobile {
      display: none;
    }

    &.desktop {
      display: block;
    }
  }
`;

export default BcgImages;
