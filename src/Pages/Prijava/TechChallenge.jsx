import React from "react";
import { Field, ErrorMessage } from "formik";

const TechChallenge = () => {
  return (
    <div className="input-page">
      <h3 className="input-title">TECH CHALLENGE:</h3>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="fonMail" className="desc">
            Unesi FON-ov imejl ukoliko ga imaš.
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
            Da li si do sad učestvovao/la u rešavanju IT studije slučaja i ako
            jesi kakvi su ti utisci?*
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
            Sa kojim tehnologijama si upoznat/a?*
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
            S kim bi želeo/la da radiš studiju slučaja (unesite puno ime i
            prezime)?
          </label>
          <p className="more-info">
            Prijavljivanje je individualno, ali ćemo pokušati da vas spojimo u
            timove prema vašim željama u zavisnosti od prijava. Timovi se mogu
            sastojati od 3 ili 4 osobe.
          </p>
        </div>
        <div className="field-group">
          <Field name="clan1" className="field" />
          <Field name="clan2" className="field" />
          <Field name="clan3" className="field" />
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
              value="EyeSee"
              className="checkbox"
            />
            EyeSee
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
            Raiffeisen banka
          </label>
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="studyComp"
              value="Semos Education"
              className="checkbox"
            />
            Semos Education
          </label>
          <ErrorMessage name="studyComp" component="div" className="error" />
        </div>
      </div>
    </div>
  );
};

export default TechChallenge;
