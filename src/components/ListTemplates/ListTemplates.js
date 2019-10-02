import React from 'react';
import ListHead from './ListHead';
import ListItem from './ListItem';
import {mapDOM} from "../../utils/mapDOM";

const url = 'https://api.myjson.com/bins/azz4s';

class ListTemplates extends React.Component {

    convertReceivedData(data) {
        return data.map((temp) => {
            temp.dom_model = mapDOM(temp.template, false);
            console.log(temp.dom_model);
            return temp;
        });
    }

	componentDidMount() {
		if (!this.props.templates.length) {
			fetch(url)
				.then(res => {
					return res.json();
				})
				.then(data => {
					this.props.getTemplates(this.convertReceivedData(data));
					this.props.isLoaded();
				})
				.catch(err => {
					console.error('Something goes wrong ', err)
				});
		}
	}
	render() {
		return (
            <table>
                <ListHead />
                <ListItem items={this.props.templates} />
            </table>
		)
	}
}

export default ListTemplates;