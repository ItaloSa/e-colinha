import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
// import domtoimage from "dom-to-image";

import { Container, DownloadContainer } from "./styled";
import useApi from "../../services/data/hook";
import { CandidatoFilter } from "../../services/data";
import { Cargos } from "../../services/data";
import { Item } from "./Item";

export function Colinha() {
  const { uf, candidatosNum } = useParams();
  const { loadData, candidatos, candidatesFromNumbers } = useApi();
  const [data, setData] = useState<CandidatoFilter>();
  const cargos = [
    Cargos.DEPUDADO_FEDERAL,
    Cargos.DEPUDADO_ESTADUAL,
    Cargos.SENADOR,
    Cargos.GOVERNADOR,
    Cargos.PRESIDENTE,
  ];

  useEffect(() => {
    const load = async () => {
      loadData(uf as string);
    };
    load();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (candidatos.senadores.length) {
      const data = candidatesFromNumbers(candidatos, candidatosNum as string);
      setData(data as unknown as CandidatoFilter);
    }
    // eslint-disable-next-line
  }, [candidatos]);

  return (
    <div className="container">
      <Container>
        <>
          <h1 className="mt-3 printable">e-Colinha.ml</h1>
          {data?.[1] ? (
            <>
              {cargos.map((cargo) => (
                <Item
                  key={data[cargo].cdCargo}
                  cargo={cargo as Cargos}
                  data={data}
                />
              ))}
            </>
          ) : (
            <div className="d-flex justify-content-center">
              <BeatLoader color="#f7a706" />
            </div>
          )}
        </>
        <DownloadContainer className="no_print mb-3">
          <hr />
          <p>
            Imprima sua e-colinha:{" "}
            <button
              className="no_print"
              onClick={() => {
                window.print();
              }}
            >
              aqui
            </button>
          </p>
        </DownloadContainer>
      </Container>
    </div>
  );
}
