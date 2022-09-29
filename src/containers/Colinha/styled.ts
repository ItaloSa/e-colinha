import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem 3rem 2rem;
  border-radius: 1rem 1rem 1rem 1rem;
  background-color: ${(props) => props.theme.bg};
`;

export const ListTitle = styled.p`
  color: #f7a706;
  margin: 25px 0 10px 0;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 600;
`;

export const ListDetails = styled.p`
  color: ${(props) => props.theme.white};
`;

export const Square = styled.div`
  max-width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  text-align: center;
  outline-color: #e94d5f;
  background-color: white;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
`;
