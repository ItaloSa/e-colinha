import { BsWhatsapp, BsTwitter, BsSave, BsPrinter } from "react-icons/bs";

import { CandidatoFilter, Cargos } from "../../services/data";
import { ShareContainer } from "./styled";
import useApi from "../../services/data/hook";

type ShareProps = {
  candidatos: CandidatoFilter;
};

export function Share({ candidatos }: ShareProps) {
  const url = window.location.href;
  const { saveColinha } = useApi();

  const sharebleText = () => {
    const header = "#eColinha #Eleicoes2022 #Eleicoes22\n\n";
    const depFed = `Dep. Federal: ${
      candidatos[Cargos.DEPUDADO_FEDERAL].numero
    }\n`;
    const depEst = `Dep. Estadual: ${
      candidatos[Cargos.DEPUDADO_ESTADUAL].numero
    }\n`;
    const sen = `Senador(a): ${candidatos[Cargos.SENADOR].numero}\n`;
    const gov = `Governador(a): ${candidatos[Cargos.GOVERNADOR].numero}\n`;
    const pre = `Presidente: ${candidatos[Cargos.PRESIDENTE].numero}\n`;
    return new URLSearchParams({
      text: `${header}${depFed}${depEst}${sen}${gov}${pre}\nVeja em: ${url}`,
    }).toString();
  };

  return (
    <ShareContainer>
      <div className="row">
        <div className="col">
          <p>Compartilhe</p>
        </div>
        <div className="col">
          <div className="share-grid">
            <a
              href={`https://api.whatsapp.com/send/?${sharebleText()}`}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <BsWhatsapp color="#000" size={20} /> Whatsapp
            </a>
            <a
              href={`https://twitter.com/intent/tweet/?${sharebleText()}`}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <BsTwitter color="#000" size={20} /> Twitter
            </a>
            <button
              className="icon-link"
              onClick={() => {
                saveColinha();
              }}
            >
              <BsSave color="#000" size={20} /> Salvar
            </button>
            <button
              className="icon-link"
              onClick={() => {
                window.print();
              }}
            >
              <BsPrinter color="#000" size={20} /> Imprimir
            </button>
          </div>
        </div>
      </div>
    </ShareContainer>
  );
}
