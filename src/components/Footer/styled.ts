import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem 1rem 2rem;
  border-radius: 1rem 1rem 0 0;
  background-color: ${({ theme }) => theme.bg};

  p,
  a,
  small {
    color: ${({ theme }) => theme.white};
  }
`;
