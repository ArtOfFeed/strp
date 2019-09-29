import React from 'react';

const Textarea = ({key, value}) => {
    return (
        <div className="text_field">
            <textarea className={`${key}`} value={`${value}`} required />
            <hr />
            <label>{`${key}`}</label>
        </div>
    )
};

export default Textarea;