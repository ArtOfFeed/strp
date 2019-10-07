import React from 'react';
import ListHead from './ListHead';
import ListItem from './ListItem';

class ListTemplates extends React.Component {

	componentDidMount() {
		this.props.getTemplatesThunkCreator();
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