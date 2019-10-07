import React from 'react';

const TemplateItem = ({ template, toggleFontChanger, updateCurrentTemplate }) => {
    const PaintElement = (tag, attr, child) => {
        if (tag !== null) {
            return React.createElement(
                tag,
                attr.className === 'editable' ? {onClick: (e) => toggleFont(e), ...attr} : attr,
                child ? child : ''
            );
        } else {
            return child[0];
        }
    };

    const toggleFont = (e) => {
        let val = e.target.textContent.replace(/\s/g, '');
        updateCurrentTemplate(val);
        toggleFontChanger(val)
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