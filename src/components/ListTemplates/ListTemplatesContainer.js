import { connect } from 'react-redux';
import { getTemplatesAC } from '../../redux/reducers/TemplateReducer';
import ListTemplates from './ListTemplates';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getTemplates: (temps) => {
			dispatch(getTemplatesAC(temps))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTemplates);