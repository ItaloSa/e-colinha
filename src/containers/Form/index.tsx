import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import BeatLoader from "react-spinners/BeatLoader";

import { FormContainer } from "./styled";
import { UFs } from "../../services/data";
import useApi from "../../services/data/hook";
import { Input } from "../../components/Button";

interface CandidateForm {
  uf: string;
  governador: string;
  senador: string;
  deputadoFederal: string;
  deputadoEstadual: string;
  presidente: string;
}

export function Form() {
  const { handleSubmit, control, setValue } = useForm<CandidateForm>();
  const [showForm, setShowForm] = useState(false);
  const { loadData, candidatos, dataToOption, isLoading } = useApi();
  const navigate = useNavigate();

  const handleOnSubmit = (data: CandidateForm) => {
    const {
      uf,
      governador,
      senador,
      deputadoFederal,
      deputadoEstadual,
      presidente,
    } = data;
    navigate(
      `/${uf}/${governador}-${senador}-${deputadoFederal}-${deputadoEstadual}-${presidente}`
    );
  };

  const handleLoadData = async (uf: string) => {
    setValue("uf", uf);
    await loadData(uf);
    setShowForm(true);
  };

  return (
    <div className="container">
      <FormContainer>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="mt-3">
            <Select
              placeholder="Selecione seu Estado"
              options={UFs}
              onChange={(newValue) => {
                handleLoadData(newValue?.value as string);
              }}
            />
          </div>
          <hr />

          {isLoading && (
            <div className="d-flex justify-content-center mt-4">
              <BeatLoader color="#f7a706" />
            </div>
          )}

          {showForm && !isLoading ? (
            <>
              <div className="mt-3">
                <Controller
                  control={control}
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      placeholder="Deputado(a) federal"
                      value={UFs.find((c) => c.value === value)}
                      name={name}
                      options={dataToOption(candidatos.deputadosFederal)}
                      ref={ref}
                      onChange={(newValue) => {
                        onChange(newValue?.value);
                      }}
                    />
                  )}
                  name={"deputadoFederal"}
                />
              </div>
              <div className="mt-3">
                <Controller
                  control={control}
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      placeholder="Deputado(a) estadual"
                      value={UFs.find((c) => c.value === value)}
                      name={name}
                      options={dataToOption(candidatos.deputadosEstadual)}
                      ref={ref}
                      onChange={(newValue) => {
                        onChange(newValue?.value);
                      }}
                    />
                  )}
                  name={"deputadoEstadual"}
                />
              </div>
              <div className="mt-3">
                <Controller
                  control={control}
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      placeholder="Senador(a)"
                      value={UFs.find((c) => c.value === value)}
                      name={name}
                      options={dataToOption(candidatos.senadores)}
                      ref={ref}
                      onChange={(newValue) => {
                        onChange(newValue?.value);
                      }}
                    />
                  )}
                  name={"senador"}
                />
              </div>
              <div className="mt-3">
                <Controller
                  control={control}
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      placeholder="Governador(a)"
                      value={UFs.find((c) => c.value === value)}
                      name={name}
                      options={dataToOption(candidatos.governadores)}
                      ref={ref}
                      onChange={(newValue) => {
                        onChange(newValue?.value);
                      }}
                    />
                  )}
                  name={"governador"}
                />
              </div>
              <div className="mt-3">
                <Controller
                  control={control}
                  render={({ field: { onChange, value, name, ref } }) => (
                    <Select
                      placeholder="Presidente(a)"
                      value={UFs.find((c) => c.value === value)}
                      name={name}
                      options={dataToOption(candidatos.presidentes)}
                      ref={ref}
                      onChange={(newValue) => {
                        onChange(newValue?.value);
                      }}
                    />
                  )}
                  name={"presidente"}
                />
              </div>
              <div className="mt-3 d-grid gap-2">
                <Input type="submit" value="Continuar" />
              </div>
            </>
          ) : null}
        </form>
      </FormContainer>
    </div>
  );
}
