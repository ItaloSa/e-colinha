import {
  Candidato,
  CandidatoFilter,
  Cargos,
  CargosNome,
} from "../../services/data";
import { ListDetails, ListTitle, Square } from "./styled";

type ItemProps = {
  data: CandidatoFilter;
  cargo: Cargos;
};

export function Item({ data, cargo }: ItemProps) {
  const formatText = ({ nomeUrna, partido }: Candidato) => {
    return `${nomeUrna} [${partido}]`;
  };

  return (
    <div className="mt-3">
      <ListTitle>{(CargosNome as any)[data[cargo].cdCargo]}</ListTitle>
      <div className="d-flex">
        {data[cargo].numero !== ""
          ? data[cargo].numero
              .toString()
              .split("")
              .map((n, i) => (
                <Square className="col" key={`${data[cargo].numero}-${i}`}>
                  {n}
                </Square>
              ))
          : null}
      </div>
      <ListDetails>{formatText(data[cargo])}</ListDetails>
    </div>
  );
}
