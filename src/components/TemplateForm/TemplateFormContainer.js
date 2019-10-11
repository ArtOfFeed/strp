import { connect } from 'react-redux';
import { setCurrentTemplateAC, setTemplatesAC, toggleFontChangerAC, updateCurrentTemplateAC } from '../../redux/reducers/TemplateReducer';
import TemplateForm from './TemplateForm';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates,
		initialValues: state.templatesPage.templates,
		fontChangerToggle: state.templatesPage.fontChangerOpen,
		editText: state.templatesPage.editText,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
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