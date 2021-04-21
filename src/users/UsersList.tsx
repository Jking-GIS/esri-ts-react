import React, { ReactElement, useState } from 'react';
import { User } from '@speedingplanet/rest-server';
import { orderBy } from 'lodash';

/*
TODO List:

Take users, render into the table
- Render the following fields: displayName, email, address.city, address.state

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

extra challenge: click on a table header to sort
extra extra challenge: click on the same header, to REVERSE the sort
*/

interface Props {
  initialUsers: User[];
}

type sortDirection = boolean | 'asc' | 'desc' | undefined;
type sortDirections = {
  [key: string]: sortDirection;
};

let sortDirs: sortDirections = {};

export default function UsersList( { initialUsers }: Props ): ReactElement {
  const [ users, setUsers ] = useState( initialUsers );

  let sortDataHandler = ( columnName: string ) => {
    let sortType: sortDirection = 'asc';
    if ( columnName in sortDirs && sortDirs[columnName] === 'asc' )
      sortType = 'desc';

    sortDirs[columnName] = sortType;

    setUsers( orderBy( users, columnName, sortType ) );
  };

  return (
    <>
      <h4>Users List</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <HeaderItem
              sortData={() => sortDataHandler( 'displayName' )}
              name="Name"
            />
            <HeaderItem
              sortData={() => sortDataHandler( 'email' )}
              name="Email"
            />
            <HeaderItem
              sortData={() => sortDataHandler( 'address.city' )}
              name="City"
            />
            <HeaderItem
              sortData={() => sortDataHandler( 'address.state' )}
              name="State"
            />
          </tr>
        </thead>
        <tbody>
          {users.map( ( user ) => {
            return (
              <tr key={user.id}>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.address.state}</td>
              </tr>
            );
          } )}
        </tbody>
      </table>
    </>
  );
}

interface HeaderProps {
  name: string;
  sortData: () => void;
}

function HeaderItem( props: HeaderProps ): ReactElement {
  return <th onClick={props.sortData}>{props.name}</th>;
}
