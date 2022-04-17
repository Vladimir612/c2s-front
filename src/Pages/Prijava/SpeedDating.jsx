import React from "react";
import { Field, ErrorMessage } from "formik";

const SpeedDating = () => {
    return (
        <div className="input-page">
            <h3 className="input-title">SPEED DATING:</h3>
            <div className="input-group">
                <div className="label-group-middle">
                    <label htmlFor="datingComp" className="desc">
                        Izaberi do 2 kompanije na čijem SPEED DATING-u bi
                        voleo/la da učestvuješ. *
                    </label>
                </div>
                <div className="field-group check-group">
                    <label className="checkbox-group">
                        <Field
                            type="checkbox"
                            name="datingComp"
                            value="A1"
                            className="checkbox"
                        />
                        A1
                    </label>
                    <label className="checkbox-group">
                        <Field
                            type="checkbox"
                            name="datingComp"
                            value="Addacta"
                            className="checkbox"
                        />
                        Addacta
                    </label>

                    <label className="checkbox-group">
                        <Field
                            type="checkbox"
                            name="datingComp"
                            value="Eyesee"
                            className="checkbox"
                        />
                        Eyesee
                    </label>
                    <label className="checkbox-group">
                        <Field
                            type="checkbox"
                            name="datingComp"
                            value="Prime Software"
                            className="checkbox"
                        />
                        Prime Software
                    </label>
                    <label className="checkbox-group">
                        <Field
                            type="checkbox"
                            name="datingComp"
                            value="Raiffeisen"
                            className="checkbox"
                        />
                        Raiffeisen
                    </label>
                    <label className="checkbox-group">
                        <Field
                            type="checkbox"
                            name="datingComp"
                            value="Semos edu"
                            className="checkbox"
                        />
                        Semos edu
                    </label>
                    <ErrorMessage
                        name="datingComp"
                        component="div"
                        className="error"
                    />
                </div>
            </div>
        </div>
    );
};

export default SpeedDating;
