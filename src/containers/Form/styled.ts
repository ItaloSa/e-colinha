import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem 3rem 2rem;
  border-radius: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.bg};
`;

export const Link = styled.a`
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 50px;
  margin-top: 23px;
  padding: 10px 0;
  line-height: 2rem;
  background-color: ${({ theme }) => theme.white};
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;
