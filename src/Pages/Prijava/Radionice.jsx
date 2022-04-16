import React from "react";
import { Field, ErrorMessage } from "formik";
const Radionice = () => {
    return (
        <div className="input-page">
            <h3 className="input-title">RADIONICE:</h3>
            <div className="input-group">
                <div className="label-group">
                    <label htmlFor="primRad" className="desc">
                        Izaberi primarnu radionicu na kojoj želiš da učestvuješ*
                    </label>
                </div>
                <div className="field-group">
                    <Field component="select" name="primRad" className="field">
                        <option value="1">Prva radionica</option>
                        <option value="2">Druga radionica</option>
                        <option value="3">Treća radionica</option>
                        <option value="4">Četvrta radionica</option>
                    </Field>
                    <ErrorMessage
                        name="primRad"
                        component="div"
                        className="error"
                    />
                </div>
            </div>
            <div className="input-group">
                <div className="label-group">
                    <label htmlFor="oblastiPrim" className="desc">
                        Koje oblasti bi želeo/la da predavač pređe na ovoj
                        radionici?*
                    </label>
                </div>
                <div className="field-group">
                    <Field
                        name="oblastiPrim"
                        className="field textarea"
                        component="textarea"
                    />
                    <ErrorMessage
                        name="oblastiPrim"
                        component="div"
                        className="error"
                    />
                </div>
            </div>
            <div className="input-group">
                <div className="label-group">
                    <label htmlFor="sporRad" className="desc">
                        Ukoliko ne budeš primljen/na na prvu radionicu, koja je
                        druga na koju bi voleo/la da prisustvuješ?
                    </label>
                </div>
                <div className="field-group">
                    <Field component="select" name="sporRad" className="field">
                        <option value="1">Prva radionica</option>
                        <option value="2">Druga radionica</option>
                        <option value="3">Treća radionica</option>
                        <option value="4">Četvrta radionica</option>
                    </Field>
                    <ErrorMessage
                        name="sporRad"
                        component="div"
                        className="error"
                    />
                </div>
            </div>
            <div className="input-group">
                <div className="label-group">
                    <label htmlFor="oblastiSpor" className="desc">
                        Koje oblasti bi želeo/la da predavač pređe na ovoj
                        radionici?
                    </label>
                </div>
                <div className="field-group">
                    <Field
                        name="oblastiSpor"
                        className="field textarea"
                        component="textarea"
                    />
                    <ErrorMessage
                        name="oblastiSpor"
                        component="div"
                        className="error"
                    />
                </div>
            </div>
        </div>
    );
};

export default Radionice;
