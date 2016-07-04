import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


class UsersList extends React.Component{

  componentWillMount(){
    this.props.fetchUsers();
  }

  list(){
    console.log(`users: ${JSON.stringify(this.props.users)}`);
    return this.props.users.map((user, index) => (
      <div key={index} className="card">
        <div className="card-block">
          <h4 className="card-title">{user.name}</h4>
          <div className="card-text">
            <p>{user.company.name}</p>
            <button className="btn btn-primary" href={user.website}>Website</button>
          </div>
        </div>
      </div>
    ));
  }

  render(){
    return(
      <div className="card-columns">
        {this.list()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, actions)(UsersList);