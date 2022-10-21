import { Routes, Route } from "react-router-dom";
import { Colinha } from "../containers/Colinha";
import { Form } from "../containers/Form";
import { DefaultLayout } from "../layouts/Default";


function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Form />} />
        <Route path="/:uf/:candidatosNum" element={<Colinha />} />
      </Route>
    </Routes>
  );
}

export { Router };
