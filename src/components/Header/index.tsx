import { TopContainer } from "./styled";

export function Header() {
  return (
    <TopContainer className="no_print">
      <div className="container">
        <h1>e-Colinha</h1>
        <div>
          <hr />
          <p>
            <b>É proibido usar celular na cabine no momento da votação! </b>
            <span>
              <a
                href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/politica/audio/2022-09/tse-proibe-uso-de-telefone-celular-durante-o-momento-da-votacao"
                target="_blank"
                rel="noreferrer"
              >
                Saiba mais
              </a>
            </span>
          </p>
        </div>
      </div>
    </TopContainer>
  );
}
