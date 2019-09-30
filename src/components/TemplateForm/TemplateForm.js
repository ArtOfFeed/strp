import React from 'react';
import { GetIdFromUrl } from '../../utils/GetIdFromUrl';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import Textarea from '../partials/Inputs/Textarea';
import TemplateItem from "./TemplateItem";

const TemplateForm = ({ location, templates, ...props }) => {

    if (!templates.length) return <Redirect to='/' />;

    let template = GetIdFromUrl(location.pathname.substring(1), templates);
    props.setCurrentTemplate(template);

    let setTemplatesWrap = (e) => {
        props.setTemplates(e);
    };

    return (
        <div className="wrapper_form">
            <h2>Form</h2>
            <form className='form' onSubmit={props.handleSubmit(setTemplatesWrap.bind(this))}>
                <Field name='template' component={props => <Textarea items={props} />} />
                <button type="submit">Save</button>
            </form>
            <TemplateItem template={template.template} />
        </div>
    )
};

export default reduxForm({ form: 'tempForm' })(TemplateForm);