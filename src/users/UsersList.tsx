import React, { ReactElement } from 'react';
import { User } from '@speedingplanet/rest-server';
import { orderBy } from 'lodash';
import { SortConfig } from './UsersView';

/*
TODO List:
Take users, render into the table
Render the following fields: displayName, email, address.city, address.state
Extra challenge: click on a table header to sort
Extra extra challenge: click on the same header, to REVERSE the sort
(Maybe lodash.orderBy will help here)


Table reference:
<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>

*/

interface Props {
  users: User[];
  sortConfig: SortConfig;
  sortUsers: ( sortField: string ) => void;
}

export default function UsersList( {
  users,
  sortConfig,
  sortUsers,
}: Props ): ReactElement {
  // table.table.table-striped.table-hover

  let displayUsers = users;

  if ( sortConfig.sortField ) {
    displayUsers = orderBy(
      users,
      sortConfig.sortField,
      sortConfig.lastSortDirection,
    );
  }

  return (
    <>
      <h4>Users List</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={() => sortUsers( 'displayName' )}>Name</th>
            <th onClick={() => sortUsers( 'email' )}>Email</th>
            <th onClick={() => sortUsers( 'address.city' )}>City</th>
            <th onClick={() => sortUsers( 'address.state' )}>State</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers.map( ( user ) => (
            <tr key={user.id}>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.state}</td>
            </tr>
          ) )}
        </tbody>
      </table>
    </>
  );
}
