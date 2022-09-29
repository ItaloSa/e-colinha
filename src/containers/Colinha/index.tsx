import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    const data = candidatesFromNumbers(candidatos, candidatosNum as string);
    setData(data as unknown as CandidatoFilter);
    // eslint-disable-next-line
  }, [candidatos]);

  return (
    <>
      {data?.[1] ? (
        <Container>
          <div className="row">
            <div className="col">
              {cargos.map((cargo) => (
                <Item
                  key={data[cargo].numero}
                  cargo={cargo as Cargos}
                  data={data}
                />
              ))}
            </div>
          </div>
        </Container>
      ) : null}
    </>
  );
}
