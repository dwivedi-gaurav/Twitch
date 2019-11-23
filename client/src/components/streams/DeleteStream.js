import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {fetchStream,deleteStream} from '../../actions';
import {Link} from 'react-router-dom'; 
import history from '../../history';

class DeleteStream extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions=()=>{
        return(
            <div>
                <button className="ui negative button" onClick={()=>this.props.deleteStream(this.props.match.params.id)}>Delete</button>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </div>
        )
    }
    render(){
        return(
            <div>
                <Modal
                    header="Delete Stream"
                    content={`Are you sure you want to delete stream: ${this.props.stream?this.props.stream.title:""}`} 
                    action={this.renderActions()}
                    onDismiss={()=>history.push('/')}
                />
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        stream:state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchStream,deleteStream})(DeleteStream); 