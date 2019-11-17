import React from 'react';
import GoogleAuth from './GoogleAuth';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
          <div className="ui tabular menu">
              <Link to="/" className="active item">Twitch</Link>
              <div className="right menu">
                <div>
                    <Link to="/" className="ui primary google button">Streams</Link>
                </div>
                <GoogleAuth/>
              </div>
          </div>  
        );
    }
}

export default Header;