import React from 'react';
import {TransformTimestamp} from '../../utils/TransformTimestamp';
import {NavLink} from 'react-router-dom';

const ListItem = (props) => {
    let listItem = props.items.map((el, i) => {
        return <tr key={i}>
            <td><NavLink to={`/${el.id}`}>{el.id}</NavLink></td>
            <td>{el.name}</td>
            <td>{TransformTimestamp(el.modified)}</td>
        </tr>
    });
    return (
        <tbody>
            {listItem}
        </tbody>
    )
}

export default ListItem;