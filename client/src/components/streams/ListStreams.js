import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

class ListStreams extends React.Component{
    componentDidMount(){
        console.log("componentDidMountCalled...");
        this.props.fetchStreams();
    }
    renderList=()=>{
        return this.props.streams.map((stream)=>{
            return(
                <div className="item" key={stream.id}>
                    <div className="content">
                        {this.renderAdminButtons(stream)}
                        <div className="header">{stream.title}</div>
                        {stream.description}
                    </div>
                </div>
            )
        });
    }
    renderAdminButtons=(stream)=>{
        if(this.props.auth.isSignedIn && this.props.auth.userId===stream.userId){
            return(
                <div>
                    <Link to={`/stream/edit/${stream.id}`} className="ui right floated primary button">Edit</Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui right floated red button">Delete</Link>
                </div>
            )
        }
    }
    renderCreateStreamButton=()=>{
        if(this.props.auth.isSignedIn){
            return <Link to="/stream/new" className="ui right floated primary button">Create Stream</Link>
        }
    }
    render(){
        return(
            <div>
                {this.renderCreateStreamButton()}
                <h3>Streams</h3>
                <div className="ui celled list" style={{marginTop:'30px'}}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        streams:Object.values(state.streams),
        auth:state.auth
    }
}

export default connect(mapStateToProps,{fetchStreams})(ListStreams);