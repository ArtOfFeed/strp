import { connect } from 'react-redux';
import {setTemplatesAC} from '../../redux/reducers/TemplateReducer';
import TemplateForm from './TemplateForm';

const mapStateToProps = (state) => {
	return {
		templates: state.templatesPage.templates
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTemplates: (temp) => {
            dispatch(setTemplatesAC(temp))
        }
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateForm);