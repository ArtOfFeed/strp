import React from 'react';

const TemplateItem = ({ template, toggleFontChanger }) => {
    const PaintElement = (tag, attr, child) => {
        if (tag !== null) {
            return React.createElement(
                tag,
                attr.className === 'editable' ? {onClick: (e) => toggleFontChanger(e.target.textContent.replace(/\s/g, '')), ...attr} : attr,
                child ? child : ''
            );
        } else {
            return child[0];
        }
    };

    const preRender = (template) => {
        let arr = [];

        for (let i = 0; i < template.content.length; i++) {
            if (typeof template.content[i] === 'object') {
                arr.push(preRender(template.content[i]));
            } else {
                arr.push(template.content[i]);
            }
        }
        return PaintElement(template.type, template.attributes, arr);
    };
    return (
        <div className='template_inner'>{preRender(template)}</div>
    )
};

export default TemplateItem;