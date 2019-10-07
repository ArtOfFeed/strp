import React from 'react';

const FontChanger = ({grid}) => {
    let gridValues = grid.map((val, i) => <li key={`grid_${i}`}>{`${val}px`}</li>)
    return (
        <ul className='font_inner'>{gridValues}</ul>
    )
}

export default FontChanger;