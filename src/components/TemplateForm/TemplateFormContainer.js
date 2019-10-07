import { connect } from 'react-redux';
import { setCurrentTemplateAC, setTemplatesAC, toggleFontChangerAC, updateCurrentTemplateAC } from '../../redux/reducers/TemplateReducer';
import TemplateForm from './TemplateForm';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates,
		initialValues: state.templatesPage.template,
		fontChangerToggle: state.templatesPage.fontChangerOpen,
		editText: state.templatesPage.editText,
		template: state.templatesPage.currentTemplate
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
		},
        updateCurrentTemplate: (text) => {
		    dispatch(updateCurrentTemplateAC(text));
        }
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateForm);