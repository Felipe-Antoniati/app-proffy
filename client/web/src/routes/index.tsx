import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "../pages/p_landing";
import TeacherForm from "../pages/p_teacher_form";
import TeacherList from "../pages/p_teacher_list";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/study" component={TeacherList} />
    </BrowserRouter>
  );
}

export default Routes;
