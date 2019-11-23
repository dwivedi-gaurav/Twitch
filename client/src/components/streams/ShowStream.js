import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import flv from 'flv.js';

class ShowStream extends React.Component{
    constructor(props){
        super(props);
        this.videoRef=React.createRef();
    }
    componentDidMount(){
        console.log("componentDidMount called...");
        this.props.fetchStream(this.props.match.params.id);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called...");
        this.flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.stream.key}.flv`
        });
        this.flvPlayer.attachMediaElement(this.videoRef.current);
        this.flvPlayer.load()
    }

    componentWillUnmount(){
        this.flvPlayer.destroy();
    }
    render(){
        if(!this.props.stream){
            return null;
        }
        return(
            <div>
                <video ref={this.videoRef} style={{width:'100%'}} controls/>
                <h3>{this.props.stream.title}</h3>
                <p>{this.props.stream.description}</p>
            </div>
        );
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        stream:state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchStream})(ShowStream);