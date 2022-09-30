import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
// import domtoimage from "dom-to-image";

import { Container, DownloadContainer } from "./styled";
import useApi from "../../services/data/hook";
import { CandidatoFilter } from "../../services/data";
import { Cargos } from "../../services/data";
import { Item } from "./Item";
import { Share } from "./Share";

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
            <Link to="/">Clique aqui</Link>
            {" "}para criar uma nova colinha.
          </p>
        </DownloadContainer>
        <div className="row no_print mt-4">
          {data && <Share candidatos={data} />}
        </div>
      </Container>
    </div>
  );
}
