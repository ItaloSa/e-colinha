import { Container } from "./styled";

export function Footer() {
  return (
    <Container className="no_print">
      <p>
        A Justiça Eleitoral NÃO solicita a digitação dos votos em nenhum meio
        que não seja a urna eletrônica.
      </p>
      <hr />
      <p>
        <small>
          Criado por{" "}
          <a href="https://github.com/italoSa" target="_blank" rel="noreferrer">
            ItaloSa
          </a>
        </small>
      </p>
    </Container>
  );
}
