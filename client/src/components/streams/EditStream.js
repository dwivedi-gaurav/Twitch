import React from 'react';
import StreamForm from './StreamForm';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions';


class EditStream extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit=(formValues)=>{
        this.props.editStream(formValues,this.props.match.params.id);
    }
    render(){
        if(!this.props.stream){
            return null;
        }
        const {title,description,key}=this.props.stream;
        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={{title,description,key}}/>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        stream:state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchStream,editStream})(EditStream);