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
                        <option value="" selected disabled hidden>
                            Izaberite prvu radionicu
                        </option>
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
                    <label htmlFor="sporRad" className="desc">
                        Ukoliko ne budeš primljen/na na prvu radionicu, koja je
                        druga na koju bi voleo/la da prisustvuješ?
                    </label>
                </div>
                <div className="field-group">
                    <Field component="select" name="sporRad" className="field">
                        <option value="" selected disabled hidden>
                            Izaberite drugu radionicu
                        </option>
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
                    <label htmlFor="trecRad" className="desc">
                        Ukoliko ne budeš primljen/na ni na prvu ni na drugu
                        radionicu, koja je treća na koju bi voleo/la da
                        prisustvuješ?
                    </label>
                </div>
                <div className="field-group">
                    <Field component="select" name="trecRad" className="field">
                        <option value="" selected disabled hidden>
                            Izaberite treću radionicu
                        </option>{" "}
                        <option value="1">Prva radionica</option>
                        <option value="2">Druga radionica</option>
                        <option value="3">Treća radionica</option>
                        <option value="4">Četvrta radionica</option>
                    </Field>
                    <ErrorMessage
                        name="trecRad"
                        component="div"
                        className="error"
                    />
                </div>
            </div>
            <div className="input-group">
                <div className="label-group">
                    <label htmlFor="oblasti" className="desc">
                        Koje oblasti bi želeo/la da predavač pređe na ovim
                        radionicama?*
                    </label>
                </div>
                <div className="field-group">
                    <Field
                        name="oblasti"
                        className="field textarea"
                        component="textarea"
                    />
                    <ErrorMessage
                        name="oblastiTrec"
                        component="div"
                        className="error"
                    />
                </div>
            </div>
        </div>
    );
};

export default Radionice;
