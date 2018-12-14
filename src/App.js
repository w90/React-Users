import React, {Component} from 'react';
import List from './List';
import ListForm from './ListForm';
import './App.css';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { email: 'jethras@zarchi.com', nickname: 'Jethras Zerchi', ip: '212.212.11.11', id: 0, },
                { email: 'francis@gerrard.com', nickname: 'Gerrard', ip: '112.212.10.11', id: 1 },
            ],
        };

        this.handleUserDelete = this.handleUserDelete.bind(this);
        this.handleUserAdd = this.handleUserAdd.bind(this);
        this.handleUsersListClear = this.handleUsersListClear.bind(this);
        this.handleSorting = this.handleSorting.bind(this);
    }

    handleUserAdd(userBeingAdded) {
        const { users } = this.state;

        if (!App.isNewUserUnique(users, userBeingAdded, ['email', 'nickname'])) {
            alert('User with provided credentials already exists');
            return;
        }

        const updatedUsers = users.slice();
        updatedUsers.push({...userBeingAdded, id: users.length});
        this.setState({ users: updatedUsers });
    }

    handleUserDelete(userBeingRemovedId) {
        const updatedUsers = this.state.users.filter(user => user.id !== userBeingRemovedId);
        const shouldProceed = window.confirm(`Do you really want to delete this user?`);
        shouldProceed && this.setState({users: updatedUsers});
    }

    static isNewUserUnique(users, userBeingAdded, fieldNames) {
        for (const user of users) {
            for (const fieldName of fieldNames) {
                if (user[fieldName] === userBeingAdded[fieldName]) {
                    return false;
                }
            }
        }
        return true;
    }

    handleUsersListClear() {
        const shouldProceed = window.confirm(`Do you really want to clear the entire list?`);
        shouldProceed && this.setState({ users: [] });
    }

    handleSorting(e) {
        const property = e.target.dataset['sort']
        const sortedUsers = this.getUsersSortedByProperty(this.state.users, property);
        this.setState({users: sortedUsers });
    }

    getUsersSortedByProperty(users, property) {
        return [...users].sort(compareUsers);

        function compareUsers(a,b) {
            if (a[property] < b[property])
                return -1;
            if (a[property] > b[property])
                return 1;
            return 0;
        }
    }

    render() {
        const { users } = this.state;

        return (
            <div className="app">
                <List
                    users={users}
                    handleUserDelete={this.handleUserDelete}
                    handleUsersListClear={this.handleUsersListClear}
                    handleSorting={this.handleSorting}
                />
                <ListForm handleUserAdd={this.handleUserAdd}/>
            </div>
        );
    }
}

export default App;
