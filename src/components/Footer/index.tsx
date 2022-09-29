import { Container } from "./styled";

export function Footer() {
  return (
    <Container>
      <p className="no_print">
        A Justiça Eleitoral NÃO solicita a digitação dos votos em nenhum meio
        que não seja a urna eletrônica.
      </p>
      <hr className="no_print" />
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
