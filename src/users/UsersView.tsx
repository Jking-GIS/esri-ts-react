import React, { useState } from 'react';
import { users } from '@speedingplanet/rest-server';
import UsersList from './UsersList';

// let initialUsers = [ { name: 'Jeff', id: 1 } ];

export default function UsersView(): JSX.Element {
  // const [ users, setUsers ] = useState( initialUsers );

  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Users</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UsersList initialUsers={users} />
        </div>
      </div>
    </section>
  );
}
