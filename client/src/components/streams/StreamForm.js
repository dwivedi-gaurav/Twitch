import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    renderInput=(formProps)=>{
        return(
            <div className="field">
                <label htmlFor={`#${formProps.input.name}`}>{formProps.label}</label>
                <input id={`#${formProps.input.name}`} {...formProps.input}/>
                {this.renderError(formProps.meta.touched,formProps.meta.error)}
            </div>
        )
    }

    renderError=(touched,error)=>{
        if(!touched){
            return null;
        }
        return(
            <div>
                <p style={{color:'red'}}>{error}</p>
            </div>
        );
    }

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
    }

    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Title"/>
                    <Field name="description" component={this.renderInput} label="Description"/>
                    <Field name="key" component={this.renderInput} label="Stream Key"/>
                    <button className="ui primary button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const validate=(formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title="Enter title";
    }
    if(!formValues.description){
        errors.description="Enter description";
    }
    if(!formValues.key){
        errors.key="Enter stream key";
    }
    return errors;
}

export default reduxForm({
    form:'StreamForm',
    validate
})(StreamForm);
