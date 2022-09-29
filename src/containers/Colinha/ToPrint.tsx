import { CandidatoFilter, Cargos, CargosNome } from "../../services/data";
import { Printable } from "./styled";

type ItemProps = {
  data: CandidatoFilter | undefined;
  cargos: Cargos[];
};

export function ToPrint({ data, cargos }: ItemProps) {
  if (!data?.[1]) return null;
  return (
    <Printable className="printable">
      <h1>e-Colinha</h1>
      <hr />
      <>
        {cargos.map((cargo) => {
            const info = data[cargo];
            return  (
          <p>{`${(CargosNome as any)[info.cdCargo]} ~ `}</p>
        )})}
      </>
    </Printable>
  );
}
