import React from "react";
import { Field, ErrorMessage } from "formik";
const Radionice = () => {
  return (
    <div className="input-page">
      <h3 className="input-title">RADIONICE:</h3>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="primRad" className="desc">
            Izaberi radionicu na kojoj želiš da prisustvuješ.
          </label>
        </div>
        <div className="field-group">
          <Field component="select" name="primRad" className="field">
            <option value="" selected disabled hidden>
              Izaberite prvu radionicu
            </option>
            <option value="Prva radionica">Prva radionica</option>
            <option value="Druga radionica">Druga radionica</option>
            <option value="Treća radionica">Treća radionica</option>
            <option value="Četvrta radionica">Četvrta radionica</option>
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
              Izaberite drugu radionicu
            </option>
            <option value="Prva radionica">Prva radionica</option>
            <option value="Druga radionica">Druga radionica</option>
            <option value="Treća radionica">Treća radionica</option>
            <option value="Četvrta radionica">Četvrta radionica</option>
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
              Izaberite treću radionicu
            </option>{" "}
            <option value="Prva radionica">Prva radionica</option>
            <option value="Druga radionica">Druga radionica</option>
            <option value="Treća radionica">Treća radionica</option>
            <option value="Četvrta radionica">Četvrta radionica</option>
          </Field>
          <ErrorMessage name="trecRad" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="oblasti" className="desc">
            Šta te motiviše da se u daljoj karijeri baviš IT-jem?
          </label>
        </div>
        <div className="field-group">
          <Field
            name="oblasti"
            className="field textarea"
            component="textarea"
          />
          <ErrorMessage name="oblastiTrec" component="div" className="error" />
        </div>
      </div>
    </div>
  );
};

export default Radionice;
