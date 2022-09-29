import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import { Container } from "./styled";
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
      </Container>
    </div>
  );
}
