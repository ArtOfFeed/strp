import { connect } from 'react-redux';
import { setCurrentTemplateAC, setTemplatesAC, toggleFontChangerAC } from '../../redux/reducers/TemplateReducer';
import TemplateForm from './TemplateForm';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates,
		initialValues: state.templatesPage.template,
		fontChangerToggle: state.templatesPage.fontChangerOpen,
		editText: state.templatesPage.editText
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
		},
		toggleFontChanger: (text) => {
			dispatch(toggleFontChangerAC(text))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateForm);