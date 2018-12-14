import React from 'react';

export default ({ user, handleUserDelete }) => {
    const displayedProps = ['nickname', 'email', 'ip'];
    const listItem = displayedProps.map(propName => {
        return <div
            className={`user-${propName}`}
            key={propName}>{user[propName]}
        </div>
    });

    return (
        <li className={'users-list-item'}>
            {listItem}
            <button onClick={() => handleUserDelete(user.id)}>Delete User</button>
        </li>
    );
}
