import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  padding: 3rem 2rem 3rem 2rem;
  border-radius: 1rem 1rem 1rem 1rem;
  background-color: ${(props) => props.theme.bg};

  @media print {
    width: 400px;
    display: block;
    padding: 0 2rem 0 2rem;
    border: 3px solid #000;
    border-radius: 1rem 1rem 1rem 1rem;
  }

  @media screen {
    .printable {
      display: none;
    }
  }
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

  @media print {
    border: 1px solid #000;
  }
`;

export const DownloadContainer = styled.div`
  color: ${(props) => props.theme.white};
  button {
    background: none;
    color: ${(props) => props.theme.bgSec};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: underline;
  }
  a {
    color: ${(props) => props.theme.bgSec};
  }
`;

export const Printable = styled.div`
  width: 300px;
  border: 1px solid #1c6ea4;
`;

export const ShareContainer = styled.div`
  p {
    color: ${(props) => props.theme.yellow};
    font-weight: 600;
  }

  .share-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 12px 6px;
  }

  .icon-link {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;
