import React from 'react';
import ListHead from './ListHead';
import ListItem from './ListItem';

const url = 'https://api.myjson.com/bins/azz4s';

class ListTemplates extends React.Component {
	componentDidMount() {
		if (!this.props.templates.length) {
			fetch(url)
				.then(res => {
					return res.json();
				})
				.then(data => {
					this.props.getTemplates(data);
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