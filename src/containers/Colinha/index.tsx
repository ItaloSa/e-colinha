import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, ListTitle, Square } from "./styled";
import useApi from "../../services/data/hook";
import { CandidatoFilter } from "../../services/data";

export function Colinha() {
  const { uf, candidatosNum } = useParams();
  const { loadData, candidatos, candidatesFromNumbers } = useApi();
  const [data, setData] = useState<CandidatoFilter>();

  useEffect(() => {
    const load = async () => {
      loadData(uf as string);
    };
    load();
  }, []);

  useEffect(() => {
    const data = candidatesFromNumbers(candidatos, candidatosNum as string);
    setData(data as unknown as CandidatoFilter);
  }, [candidatos]);

  console.log(data);

  return (
    <>
      {data?.governador ? (
        <Container>
          <div className="row">
            <div className="col">
              <div className="mt-3">
                <ListTitle>DEPUTADA OU DEPUTADO(A) FEDERAL</ListTitle>
                <div className="d-flex">
                  {data.deputadoFederal.numero.toString().split('').map(n => <Square className="col">{n}</Square> )}
                </div>
              </div>
              <div className="mt-3">
                <ListTitle>DEPUTADA OU DEPUTADO(A) ESTADUAL</ListTitle>
                <div className="d-flex">
                  {data.deputadoEstadual.numero.toString().split('').map(n => <Square className="col">{n}</Square> )}
                </div>
              </div>
              <div className="mt-3">
                <ListTitle>SENADOR(A)</ListTitle>
                <div className="d-flex">
                  {data.senador.numero.toString().split('').map(n => <Square className="col">{n}</Square> )}
                </div>
              </div>
              <div className="mt-3">
                <ListTitle>GOVERNADOR(A)</ListTitle>
                <div className="d-flex">
                  {data.governador.numero.toString().split('').map(n => <Square className="col">{n}</Square> )}
                </div>
              </div>
              <div className="mt-3">
                <ListTitle>PRESIDENTE(A)</ListTitle>
                <div className="d-flex">
                  {data.presidente.numero.toString().split('').map(n => <Square className="col">{n}</Square> )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : null}
    </>
  );
}
