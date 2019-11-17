import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import history from '../history';
import ListStream from './streams/ListStreams';
import CreateStream from './streams/CreateStream';
import EditStream from './streams/EditStream';
import DeleteStream from './streams/DeleteStream';
import ShowStream from './streams/ShowStream';
import Header from '../components/Header';

class App extends React.Component{
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={ListStream}/>
                        <Route path="/stream/new" component={CreateStream}/>
                        <Route path="/stream/delete/:id" component={DeleteStream}/>
                        <Route path="/stream/edit/:id" component={EditStream}/>
                        <Route path="/stream/:id" component={ShowStream}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;