import React from 'react';
import ListItem from './ListItem';

export default ({ users, handleUserDelete, handleUsersListClear, handleSorting }) => {
    const listItems = users.map(user => {
       return <ListItem
           user={user}
           handleUserDelete={handleUserDelete}
           key={user.id}
       />
    });

    const sortingProperies = ['nickname', 'email', 'id'];
    const sortingButtons = sortingProperies.map(property => {
        return <button data-sort={property} onClick={handleSorting} key={property}>Sort by {property === 'id' ? 'date' : property}</button>
    });

    return (
        <div className={'users-list-container'}>

            <div className="users-list-sorting">
                {sortingButtons}
            </div>

            <ul className={'users-list'}>
            {listItems}
            </ul>

            { users.length > 0 &&
                <div className={'users-list-button-container'}>
                    <button className="users-list-button-clear" onClick={handleUsersListClear}>Clear Users List</button>
                </div>
            }
        </div>
    );
}
