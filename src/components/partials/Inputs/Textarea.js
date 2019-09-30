import React from 'react';

const Textarea = ({label, items}) => {
    return (
        <div className="text_field">
            <textarea className={label} onChange={(e) => items.input.onChange(e)} defaultValue={items.input.value} required />
            <hr />
            <label>{label}</label>
        </div>
    )
};

export default Textarea;