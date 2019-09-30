import React from 'react';
import {TransformTimestamp} from '../../utils/TransformTimestamp';
import {NavLink} from 'react-router-dom';

const ListItem = (props) => {
    let listItem = props.items.map((el, i) => {
        return <tr key={i}>
            <td>{el.id}</td>
            <td><NavLink to={`/${el.id}`}>{el.name}</NavLink></td>
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