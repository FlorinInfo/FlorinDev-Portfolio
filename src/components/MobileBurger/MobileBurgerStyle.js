import styled from "styled-components";

export const MobileBurgerContainer = styled.div`
  position: absolute;
  right: 20px;
  top:42px;
  width:30px;
  height:30px;
  z-index:9999;
  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

export const MobileBurger = styled.div`
  display: block;
  position: relative;
  width: 30px;
  height: 2px;
  z-index:999;
  transform:translateY(8px);
  background-color: ${(props) =>
    props.openedBurger == true ? "transparent" : "white"};

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: white;
    transition: 0.2s;
  }

  &::after {
    top: ${(props) => (props.openedBurger == true ? "0px" : "7px")};
    transform: rotate(
      ${(props) => (props.openedBurger == true ? "135deg" : "0")}
    );
  }

  &::before {
    top: ${(props) => (props.openedBurger == true ? "0px" : "-7px")};
    transform: rotate(
      ${(props) => (props.openedBurger == true ? "-135deg" : "0")}
    );
  }
`;

export const NavBckg = styled.div`
  display:block;
  position:absolute;
  z-index:900;
  border-radius: 50%;
  background-image: radial-gradient(#0f1624, #212D45);
  transition: transform 0.5s cubic-bezier(0.86, 0, 0.7, 1);
  top: 48px;
  right: 20px;
  transform: scale(${(props) => (props.openedBurger == true ? "10000" : "0")});
  width: 1px;
  height: 1px;
`;

export const NavigationListCnt = styled.div `
  z-index:980;
  position:fixed;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform:translateX(${(props) => (props.openedBurger == true ? "0" : "-800px")}); 
`

export const NavigationList = styled.ul `
top:50vh;
left:50vw;
transform:translateX(-70%);
width:100vw;
height:100vh;


  &>li {
    color:white;
    font-size:3.7rem;
    text-transform:uppercase;
    line-height:100px;

    &>a {
      text-decoration:none;
      color:white;
    }
  }
`
