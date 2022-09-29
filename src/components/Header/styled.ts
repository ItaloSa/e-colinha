import styled from "styled-components";

export const TopContainer = styled.div`
  color: ${(props) => props.theme.white};
  padding: 2rem 2rem 1rem 2rem;
  border-radius: 0 0 1rem 1rem;
  background-color: ${(props) => props.theme.bgSec};

  a {
    color: ${(props) => props.theme.white}; 
  }
`;
