import { connect } from 'react-redux';
import {getTemplatesThunkCreator} from '../../redux/reducers/TemplateReducer';
import ListTemplates from './ListTemplates';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates,
        loading: state.templatesPage.loading
	}
};

export default connect(mapStateToProps, {getTemplatesThunkCreator})(ListTemplates);