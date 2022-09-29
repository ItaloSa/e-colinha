export const UFs = [
  { label: "Rondônia", value: "RO" },
  { label: "Acre", value: "AC" },
  { label: "Amazonas", value: "AM" },
  { label: "Roraima", value: "RR" },
  { label: "Pará", value: "PA" },
  { label: "Amapá", value: "AP" },
  { label: "Tocantins", value: "TO" },
  { label: "Maranhão", value: "MA" },
  { label: "Piauí", value: "PI" },
  { label: "Ceará", value: "CE" },
  { label: "Rio Grande do Norte", value: "RN" },
  { label: "Paraíba", value: "PB" },
  { label: "Pernambuco", value: "PE" },
  { label: "Alagoas", value: "AL" },
  { label: "Sergipe", value: "SE" },
  { label: "Bahia", value: "BA" },
  { label: "Minas Gerais", value: "MG" },
  { label: "Espírito Santo", value: "ES" },
  { label: "Rio de Janeiro", value: "RJ" },
  { label: "São Paulo", value: "SP" },
  { label: "Paraná", value: "PR" },
  { label: "Santa Catarina", value: "SC" },
  { label: "Rio Grande do Sul", value: "RS" },
  { label: "Mato Grosso do Sul", value: "MS" },
  { label: "Mato Grosso", value: "MT" },
  { label: "Goiás", value: "GO" },
  { label: "Distrito Federal", value: "DF" },
];

export enum Cargos {
  GOVERNADOR = 3,
  SENADOR = 5,
  DEPUDADO_FEDERAL = 6,
  DEPUDADO_ESTADUAL = 7,
  PRESIDENTE = 1,
}

export interface Candidato {
  cdCargo: number;
  cargo: string;
  id: number;
  numero: number;
  nomeUrna: string;
  situacao: string;
  partido: string;
}

export type CandidatoData = {
  governadores: Candidato[];
  senadores: Candidato[];
  deputadosFederal: Candidato[];
  deputadosEstadual: Candidato[];
  presidentes: Candidato[];
};

export type CandidatoFilter = {
  governador: Candidato;
  senador: Candidato;
  deputadoFederal: Candidato;
  deputadoEstadual: Candidato;
  presidente: Candidato;
};
