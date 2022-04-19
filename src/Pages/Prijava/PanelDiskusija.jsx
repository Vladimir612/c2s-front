import React from "react";
import { Field, ErrorMessage } from "formik";

const PanelDiskusija = () => {
  return (
    <div className="input-page">
      <h3 className="input-title">PANEL DISKUSIJA:</h3>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="name" className="desc">
            S obzirom da je tema ovogodišnjeg panela “__________”, šta bi sve
            voleo/la da čuješ od naših panelista?
          </label>
        </div>
        <div className="field-group">
          <Field name="panel" className="field textarea" component="textarea" />
          <ErrorMessage name="panel" component="div" className="error" />
        </div>
      </div>
    </div>
  );
};
export default PanelDiskusija;
