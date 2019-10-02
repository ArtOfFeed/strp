import React from 'react';

const TemplateItem = ({template}) => {
    const PaintElement = (tag, attr, child) => {
        return React.createElement(
            tag,
            attr ? attr : {},
            child ? child : ''
        );
    };

    const preRender = (template) => {
        let arr = [];
        let result = null;
        if (template.content.length > 1) {
            result = PaintElement(template.type, template.attributes, arr);
            for (let i = 0; i < template.content.length; i++) {
                if (typeof template.content[i] === 'object') {
                    arr.push(PaintElement(template.content[i].type, template.content[i].attributes, preRender(template.content[i])));
                }
            }
        }
        return result;
    };

    return(
        preRender(template)
    )
};

export default TemplateItem;