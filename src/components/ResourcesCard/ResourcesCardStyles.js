import styled from "styled-components";

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleCard = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 20px;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardTools = styled.div`
  display: flex;
`;

export const CardTool = styled.div`
  display: flex;
  flex-direction:column; 
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  overflow: hidden; 
  display:block;
`;

export const ResourceTitle = styled.a`
  color: white;

  margin-top:20px;
  font-weight:500;
  font-size:19px;
  text-decoration:none;
`;

export const ResourceDescription = styled.span `
    display:block;
    color:rgba(255,255,255,0.5);
    max-width:400px;
    margin-top:10px;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    grid-template-columns: repeat(2, 1fr);
    margin: 64px 0;
    gap: 20px

  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`
