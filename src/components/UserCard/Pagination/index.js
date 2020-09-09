import React, { useState, useEffect, Component } from 'react';
import getUsers from '../api/index.js';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UserItem from '../UserItem/UserItem'

// if (error) {
//   return <div> error: {this.state.length > 0 && this.mapUsers} {error.message}</div>;
// } else if (!isLoaded) {
// return <div> load... {this.state.length > 0 && this.mapUsers}</div>;
// } else {
//   return (
//     <ul>
//         {this.mapUsers()}
//       {users.map((email) => (
//         <li key={email.name}>{currentPage}</li>
//       ))}
//     </ul>

class PageUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      isLoaded: false,
      error: null,
    };
  }

  fetchUsers = async () => {
    const { currentPage } = this.state;
    try {
      this.setState({
        isLoaded: true,
      });

      const newUsers = await getUsers({
        page: currentPage,
      });

      console.log(newUsers);

      this.setState({
        //users: getUsers.results,
    users: [...this.state.users, ...newUsers],
        
        //users: this.state.newUsers,
        isLoaded: false,
      });
    } catch (err) {
      this.setState({
        isLoaded: false,
        error: { txt: err.message },
      });
      console.dir(err.message);
    }
  };

  

  loadUsers = () => {
    const { currentPage } = this.state;
    getUsers({
      page: currentPage,
    })
      .then((data) => {
        this.setState({
          users: data.results,
          isLoaded: false,
          
        });
        console.log(data.results);
      })
      .catch((error) => {
        this.setState({
          error,
          isLoaded: false,
        });
      });
  };

mapUsers = () => {     
    return this.state.users.map((user) => {
      return <UserItem {...user} key={user.email}/>;
    });
    };
      
  componentDidMount() {
    //this.fetchUsers();
    this.loadUsers();
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.loadUsers();
      //this.fetchUsers();
    }
  }

  render() {
    const { error, isLoaded, users } = this.state;
    const { currentPage } = this.props;
    return(
    <div>

      {this.state.users.length > 0 && this.mapUsers()}
    </div>  
    )
      
    }
  
}

export default PageUsers;