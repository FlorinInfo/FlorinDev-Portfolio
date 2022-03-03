import styled from "styled-components";

export const MobileBurgerContainer = styled.div`
  position: fixed;
  top: 48px;
  right: 20px;
  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

export const MobileBurger = styled.div`
  display: block;
  position: relative;
  width: 30px;
  height: 2px;
  background-color: ${ props=> props.defaultColor};

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: white;
  }

  &::after {
    top: 7px;
  }

  &::before {
    top: -7px;
  }
`;
