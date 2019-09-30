import { connect } from 'react-redux';
import { getTemplatesAC, isLoadedAC } from '../../redux/reducers/TemplateReducer';
import ListTemplates from './ListTemplates';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates,
        loading: state.templatesPage.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getTemplates: (temps) => {
			dispatch(getTemplatesAC(temps))
		},
		isLoaded: () => {
			dispatch(isLoadedAC())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTemplates);