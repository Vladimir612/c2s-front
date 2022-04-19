import React from "react";
import { Field, ErrorMessage } from "formik";

const TechChallenge = () => {
  return (
    <div className="input-page">
      <h3 className="input-title">TECH CHALLENGE:</h3>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="fonMail" className="desc">
            Ukoliko imaš FON-ov mail, unesi ga.
          </label>
        </div>
        <div className="field-group">
          <Field name="fonMail" className="field" />
          <ErrorMessage name="fonMail" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="ucestvovao" className="desc">
            Da li si do sad učestvovao/la u rešavanju IT studije slučaja?*
          </label>
        </div>
        <div className="field-group">
          <Field name="ucestvovao" className="field" />
          <ErrorMessage name="ucestvovao" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="tehnologije" className="desc">
            Sa kojim tehnologijama si upoznat/a?
          </label>
        </div>
        <div className="field-group">
          <Field name="tehnologije" className="field" />
          <ErrorMessage name="tehnologije" component="div" className="error" />
        </div>
      </div>

      <div className="input-group">
        <div className="label-group">
          <label className="desc">
            S kim bi želeo/la da radiš studiju slučaja?
          </label>
          <p className="more-info">
            Unesite puno ime i prezime osoba. Timovi se mogu sastojati od 3 ili
            4 osobe. Moguće je i individualno prijavljivanje.
          </p>
        </div>
        <div className="field-group">
          <Field name="clan1" className="field" />
          <Field name="clan2" className="field" />
          <Field name="clan3" className="field" />
          <Field name="clan4" className="field" />
        </div>
      </div>

      <div className="input-group">
        <div className="label-group">
          <label htmlFor="studyComp" className="desc">
            Izaberi do tri kompanije za koje bi najviše voleo/la da radiš
            studiju slučaja?*
          </label>
        </div>
        <div className="field-group check-group">
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="studyComp"
              value="A1"
              className="checkbox"
            />
            A1
          </label>
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="studyComp"
              value="Adacta"
              className="checkbox"
            />
            Adacta
          </label>

          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="studyComp"
              value="Eyesee"
              className="checkbox"
            />
            Eyesee
          </label>
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="studyComp"
              value="Prime Software"
              className="checkbox"
            />
            Prime Software
          </label>
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="studyComp"
              value="Raiffeisen"
              className="checkbox"
            />
            Raiffeisen
          </label>
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="studyComp"
              value="Semos education"
              className="checkbox"
            />
            Semos education
          </label>
          <ErrorMessage name="studyComp" component="div" className="error" />
        </div>
      </div>
    </div>
  );
};

export default TechChallenge;
