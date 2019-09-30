import React from 'react';

const Textarea = function({items}) {
    return (
        <div className="text_field">
            <textarea className='template' onChange={(e) => items.input.onChange(e)} defaultValue={items.input.value} required />
            <hr />
            <label>template</label>
        </div>
    )
};

export default Textarea;