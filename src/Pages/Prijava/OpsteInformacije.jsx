import React from "react";
import { Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const OpsteInformacije = () => {
  return (
    <div className="input-page">
      <h3 className="input-title">OPŠTE INFORMACIJE:</h3>
      <div className="input-group">
        <label htmlFor="name" className="desc">
          Ime i prezime*
        </label>
        <div className="field-group">
          <Field name="name" className="field" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="email" className="desc">
          Email*
        </label>
        <div className="field-group">
          <Field type="email" name="email" className="field" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="email" className="desc">
            Broj telefona*
          </label>
          <p className="more-info">
            Potreban nam je zbog kreiranja grupe za koordinaciju u toku
            projekta.
          </p>
        </div>
        <div className="field-group">
          <Field type="phone" name="phone" className="field" />
          <ErrorMessage name="phone" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="faculty" className="desc">
          Fakultet*
        </label>
        <div className="field-group">
          <Field name="faculty" className="field" />
          <ErrorMessage name="faculty" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="year" className="desc">
          Godina studija*
        </label>
        <div className="field-group">
          <Field component="select" name="year" className="field">
            <option value="1">Prva</option>
            <option value="2">Druga</option>
            <option value="3">Treća</option>
            <option value="4">Četvrta</option>
            <option value="5">Master</option>
          </Field>
          <ErrorMessage name="year" component="div" className="error" />
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="parts" className="desc">
            Izaberi delove projekta na kojima želiš da učestvuješ*
          </label>
        </div>
        <div className="field-group check-group">
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="parts"
              value="1"
              className="checkbox"
            />
            Panel diskusija
          </label>
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="parts"
              value="2"
              className="checkbox"
            />
            Radionice
          </label>

          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="parts"
              value="3"
              className="checkbox"
            />
            Speed Dating
          </label>
          <label className="checkbox-group">
            <Field
              type="checkbox"
              name="parts"
              value="4"
              className="checkbox"
            />
            Tech Challenge
          </label>
          <ErrorMessage name="parts" component="div" className="error" />
        </div>
      </div>

      <div className="input-group">
        <div className="label-group">
          <label htmlFor="cv" className="desc">
            Unesite link do CV-ja*
          </label>
          <p className="more-info">
            Link do CV-a treba da bude validan i otključan, inače neće biti
            omogućeno učestvovanje na projektu!
          </p>
        </div>
        <div className="field-group">
          <Field name="cv" className="field" />
          <ErrorMessage name="cv" component="div" className="error" />
          <div className="another-option">
            ili iskoristite naš CV generator:
          </div>

          <Link to="/generator" target="_blank">
            <motion.button
              className="white-dugme"
              style={{ width: "100%", marginLeft: 0 }}
              type="button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Otvori CV Generator
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="input-group">
        <div className="label-group">
          <label htmlFor="newsletter" className="desc">
            Email novosti i obaveštenja
          </label>
        </div>
        <div className="field-group check-group">
          <label className="checkbox-group">
            <Field type="checkbox" name="newsletter" className="checkbox" />
            Želim da mi stižu obaveštenja o FONIS-ovim aktivnostima
          </label>
        </div>
      </div>
    </div>
  );
};

export default OpsteInformacije;
