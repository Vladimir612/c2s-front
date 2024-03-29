import React from "react";
import { Field, ErrorMessage } from "formik";

const Lectures = () => {
  return (
    <div className="input-page">
      <h3 className="input-title">RADIONICE:</h3>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="primRad" className="desc">
            Izaberi radionicu na kojoj želiš da prisustvuješ. *
          </label>
        </div>
        <div className="field-group">
          <Field component="select" name="primRad" className="field">
            <option value="" selected disabled hidden>
              Izaberi prvu radionicu
            </option>
            <option value="Izazovi u B2C monetizaciji 5G usluga">
              Izazovi u B2C monetizaciji 5G usluga
            </option>
            <option value="Uvod u Angular">
              Angular: Razvoj web aplikacije i VS Code ekstenzije
            </option>
            <option value="Machine learning">
              React: Razvoj Emotion Viewer aplikacije
            </option>
            <option value="Spring Boot">
              Spring Boot: Razvoj API backend sistema
            </option>
            <option value="DevOps pristup razvoju softvera">
              DevOps pristup razvoju softvera
            </option>
            <option value="Uvod u 3D Game Development">
              Uvod u 3D Game Development
            </option>
          </Field>
          <ErrorMessage name="primRad" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="sporRad" className="desc">
            Koja radionica je tvoj drugi izbor?
          </label>
        </div>
        <div className="field-group">
          <Field component="select" name="sporRad" className="field">
            <option value="" selected disabled hidden>
              Izaberi drugu radionicu
            </option>
            <option value="">Ne želim drugu opciju</option>
            <option value="Izazovi u B2C monetizaciji 5G usluga">
              Izazovi u B2C monetizaciji 5G usluga
            </option>
            <option value="Uvod u Angular">
              Angular: Razvoj web aplikacije i VS Code ekstenzije
            </option>
            <option value="Machine learning">
              React: Razvoj Emotion Viewer aplikacije
            </option>
            <option value="Spring Boot">
              Spring Boot: Razvoj API backend sistema
            </option>
            <option value="DevOps pristup razvoju softvera">
              DevOps pristup razvoju softvera
            </option>
            <option value="Uvod u 3D Game Development">
              Uvod u 3D Game Development
            </option>
          </Field>
          <ErrorMessage name="sporRad" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="trecRad" className="desc">
            Koja radionica je tvoj treći izbor?
          </label>
        </div>
        <div className="field-group">
          <Field component="select" name="trecRad" className="field">
            <option value="" selected disabled hidden>
              Izaberi treću radionicu
            </option>{" "}
            <option value="">Ne želim treću opciju</option>
            <option value="Izazovi u B2C monetizaciji 5G usluga">
              Izazovi u B2C monetizaciji 5G usluga
            </option>
            <option value="Uvod u Angular">
              Angular: Razvoj web aplikacije i VS Code ekstenzije
            </option>
            <option value="Machine learning">
              React: Razvoj Emotion Viewer aplikacije
            </option>
            <option value="Spring Boot">
              Spring Boot: Razvoj API backend sistema
            </option>
            <option value="DevOps pristup razvoju softvera">
              DevOps pristup razvoju softvera
            </option>
            <option value="Uvod u 3D Game Development">
              Uvod u 3D Game Development
            </option>
          </Field>
          <ErrorMessage name="trecRad" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="oblasti" className="desc">
            Šta te motiviše da se u daljoj karijeri baviš IT-jem? *
          </label>
        </div>
        <div className="field-group">
          <Field
            name="oblasti"
            className="field textarea"
            component="textarea"
          />
          <ErrorMessage name="oblasti" component="div" className="error" />
        </div>
      </div>
    </div>
  );
};

export default Lectures;
