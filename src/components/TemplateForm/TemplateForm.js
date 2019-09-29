import React from 'react';
import { GetIdFromUrl } from '../../utils/GetIdFromUrl';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const TemplateForm = ({location, templates, ...props}) => {

    if (!templates.length) return <Redirect to='/'/>;

    let template = GetIdFromUrl(location.pathname.substring(1), templates);
    let temps = Object.keys(template).map((key, i) => {
        let value = template[key];
        return <Field component={'textarea'} key={`field_${i}`} value={`${value}`} name={`${key}`}  />;
    });
    return (
        <div className="wrapper_form">
            <h2>Form</h2>
            <form onSubmit={props.handleSubmit}>
                {temps}
                <button type="submit">Save</button>
            </form>
        </div>
    )
};

export default reduxForm({form: 'tempForm'})(TemplateForm);