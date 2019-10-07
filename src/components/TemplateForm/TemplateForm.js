import React from 'react';
import { GetIdFromUrl } from '../../utils/GetIdFromUrl';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Textarea from '../partials/Inputs/Textarea';
import TemplateItem from './TemplateItem';
import FontChanger from '../FontChanger/FontChanger';
import { gridFonts } from '../partials/gridFonts';

const TemplateForm = ({ location, templates, fontChangerToggle, toggleFontChanger, ...props }) => {

    if (!templates.length) return <Redirect to='/' />;

    let template = GetIdFromUrl(location.pathname.substring(1), templates);
    props.setCurrentTemplate(template);

    let setTemplatesWrap = (e) => {
        props.setTemplates(e);
    };

    return (
        <div className="wrapper_form">
            {fontChangerToggle ? <FontChanger grid={gridFonts} /> : ''}
            <h2>Form</h2>
            <form className='form' onSubmit={props.handleSubmit(setTemplatesWrap.bind(this))}>
                <Field name='template' component={props => <Textarea items={props} />} />
                <button type="submit">Save</button>
            </form>
            <TemplateItem template={template.dom_model} toggleFontChanger={toggleFontChanger} />
        </div>
    )
};

export default reduxForm({ form: 'tempForm' })(TemplateForm);