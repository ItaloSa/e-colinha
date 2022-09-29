import { useState } from "react";
import { useDataContext } from "./context";
import { Candidato, CandidatoData, Cargos } from "./data";

export default function useApi() {
  const [isLoading, setIsLoading] = useState(false);
  const { candidatos, setData } = useDataContext();

  async function loadCand(uf: string): Promise<Candidato[]> {
    const response = await fetch(`/data/cand_${uf}.json`);
    const data = await response.json();
    return data;
  }

  function filterCargo(data: Candidato[], cargo: Cargos) {
    return data.filter((cand) => cand.cdCargo === cargo);
  }

  async function loadData(uf: string) {
    const pres = await loadCand("BR");
    const estado = await loadCand(uf);

    const data = {
      governadores: filterCargo(estado, Cargos.GOVERNADOR),
      senadores: filterCargo(estado, Cargos.SENADOR),
      deputadosFederal: filterCargo(estado, Cargos.DEPUDADO_FEDERAL),
      deputadosEstadual: filterCargo(estado, Cargos.DEPUDADO_ESTADUAL),
      presidentes: filterCargo(pres, Cargos.PRESIDENTE),
    };
    setData(data);
  }

  function dataToOption(candidatos: Candidato[]) {
    const a = candidatos.map(({ nomeUrna, numero, partido, id }) => ({
      label: `${nomeUrna} (${numero}) [${partido}]`,
      value: `${numero}`,
    }));
    return a;
  }

  function findCandidato(numero: string, data: Candidato[]) {
    return data.find((candidato) => candidato.numero.toString() === numero);
  }

  function candidatesFromNumbers(data: CandidatoData, numbers: string) {
    const [governador, senador, deputadoFederal, deputadoEstadual, presidente] =
      numbers.split("-");
    return {
      [Cargos.GOVERNADOR]: findCandidato(governador, data.governadores),
      [Cargos.SENADOR]: findCandidato(senador, data.senadores),
      [Cargos.DEPUDADO_FEDERAL]: findCandidato(
        deputadoFederal,
        data.deputadosFederal
      ),
      [Cargos.DEPUDADO_ESTADUAL]: findCandidato(
        deputadoEstadual,
        data.deputadosEstadual
      ),
      [Cargos.PRESIDENTE]: findCandidato(presidente, data.presidentes),
    };
  }

  return {
    isLoading,
    setIsLoading,
    loadData,
    candidatos,
    dataToOption,
    candidatesFromNumbers,
  };
}
