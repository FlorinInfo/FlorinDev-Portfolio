import styled from "styled-components"

export const ResourceLinks = styled.div `
  padding-bottom:20px; 
  display: grid;
  grid-template-columns: 
  repeat(auto-fit, minmax(150px, 1fr));


  &::after {
    content:"";
    flex:auto;
  }
`

export const ResourceLink = styled.a `
  display:block;
  background: #212D45;
  padding:3px 30px;
  text-align:center;
  border-radius:5px;
  cursor:pointer;
  text-decoration:none;
  color:white;
  transition:.5s;
  margin:5px;
  
  margin-top:10px;
  &:hover {
    transform:translateY(-2px);
  }
`
