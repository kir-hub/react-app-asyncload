import React, { Component } from 'react';
import { getUsers } from './../../api';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentpage: 1,
      isFetching: true,
      error: null,
    };
  }

  loadUsers = () => {
    const { currentpage } = this.state;
    getUsers({
      page: currentpage,
      result: 10,
    })
      .then((data) => {
        this.setState({
          users: data.results,
          isFetching: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isFetching: false,
        });
      });
  };

  componentDidMount() {
    this.loadUsers();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentpage !== this.state.currentpage) {
      this.loadUsers();
    }
  }

  prev = () => {
    const { currentpage } = this.state;
    if (currentpage > 1) {
      this.setState({
        currentpage: currentpage - 1,
      });
    }
  };

  next = () => {
    const { currentpage } = this.state;
    this.setState({
      currentpage: currentpage + 1,
    });
  };

  render() {
    const { users, error, isFetching, currentpage } = this.state;
    if (error) {
      return <div>Error</div>;
    }
    if (isFetching) {
      return <div>LOAD...</div>;
    }
    return (
      <>
        <h1>{currentpage}</h1>
        <button onClick={this.prev}>prev_page </button>
        <button onClick={this.next}>next_page </button>
        <ul>
          <li>
            <h2>User List:</h2>
          </li>
          {users.map((u) => (
            <li key={`${u.email}`}>
              <br />
              {JSON.stringify(u, null, '\t')}
              <br />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default UserLoader;
