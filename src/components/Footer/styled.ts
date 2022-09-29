import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem 1rem 2rem;
  border-radius: 1rem 1rem 0 0;
  background-color: ${(props) => props.theme.bg};

  p, a, small {
    color: ${(props) => props.theme.white}; 
  }
`;
