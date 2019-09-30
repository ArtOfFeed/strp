import React from 'react';
import { GetIdFromUrl } from '../../utils/GetIdFromUrl';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import Textarea from '../partials/Inputs/Textarea';

const TemplateForm = ({ location, templates, ...props }) => {

    if (!templates.length) return <Redirect to='/' />;

    let template = GetIdFromUrl(location.pathname.substring(1), templates);
    props.setCurrentTemplate(template)
    let temps = Object.keys(template).map((key, i) => {
        return <Field key={`field_${i}`} name={`${key}`} component={props => <Textarea items={props} label={`${key}`} />} />;
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

export default reduxForm({ form: 'tempForm', onSubmit: (e) => console.log(e) })(TemplateForm);