import React from 'react';

class TemplateItem extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.templateRef = React.createRef();
        this.editableTags = null;
    }

    componentDidMount() {
        this.editableTags = [...this.templateRef.current.getElementsByClassName('editable')];
        console.log(this.editableTags);
        this.editableTags.forEach((tags) => {
            tags.addEventListener('click', this.handleClick);
        });
    }

    handleClick(e) {
        console.log('clicked', e);
    }

    render() {
        return (
            <div className='template_inner' ref={this.templateRef} dangerouslySetInnerHTML={{ __html: this.props.template }} />
        )
    }
}

export default TemplateItem;