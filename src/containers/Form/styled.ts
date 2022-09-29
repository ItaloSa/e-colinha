import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem 3rem 2rem;
  border-radius: 1rem 1rem 1rem 1rem;
  background-color: ${(props) => props.theme.bg};
`;

export const SubmitBtn = styled.input`
  border: 1px solid #fff;
  border-radius: 50px;
  margin-top: 23px;
  padding: 10px 0;
  line-height: 2rem;
`;
