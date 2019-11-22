import React from 'react';
import {createStream} from '../../actions';
import {connect} from 'react-redux'; 
import StreamForm from './StreamForm';

class CreateStream extends React.Component{

    onSubmit=(formValues)=>{
        this.props.createStream(formValues);
    }

    render(){
        return(
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null,{createStream})(CreateStream)