import { connect } from 'react-redux';
import { setCurrentTemplateAC, setTemplatesAC } from '../../redux/reducers/TemplateReducer';
import TemplateForm from './TemplateForm';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates,
		initialValues: state.templatesPage.template
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentTemplate: (temp) => {
			dispatch(setCurrentTemplateAC(temp))
		},
		setTemplates: (temp) => {
		    temp.modified = Date.now();
			dispatch(setTemplatesAC(temp))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateForm);