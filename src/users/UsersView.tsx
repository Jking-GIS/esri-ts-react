import React, { useEffect, useState } from 'react';
import { users, dao, User } from '@speedingplanet/rest-server';
import UsersList from './UsersList';
import { Route, useRouteMatch, NavLink, useHistory } from 'react-router-dom';
import UsersDataTable from './UsersDataTable';
import { ColumnConfig } from '../components/DataTable';
import UserDetailsWrapper from './UserDetailsWrapper';

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  sortField: string;
  lastSortField: string;
  lastSortDirection: SortDirection;
}

export default function UsersView(): JSX.Element {
  const history = useHistory();
  const [ asyncUsers, setAsyncUsers ] = useState<User[]>( [] );
  const [ sortConfig, setSortConfig ] = useState<SortConfig>( {
    sortField: '',
    lastSortField: '',
    lastSortDirection: 'asc',
  } );

  useEffect( () => {
    dao.findAllUsers().then( ( results ) => setAsyncUsers( results.data ) );
  }, [] );

  const urlPrefix = useRouteMatch().url;

  const handleSortUsers = ( sortField: string ) => {
    let lastSortDirection: SortDirection = 'asc';
    if (
      sortField === sortConfig.sortField &&
      sortConfig.lastSortDirection === 'asc'
    ) {
      lastSortDirection = 'desc';
    }

    setSortConfig( {
      sortField,
      lastSortField: sortConfig.sortField,
      lastSortDirection,
    } );
  };

  let columns: ColumnConfig[] = [
    { field: 'displayName', label: 'Name' },
    { field: 'email', label: 'E-mail' },
    { field: 'address.city', label: 'City' },
    { field: 'address.state', label: 'State' },
  ];

  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Users</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item">
                <NavLink to={urlPrefix + '/users-list'}>UsersList</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to={urlPrefix + '/users-data-table'}>
                  UsersDataTable
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to={urlPrefix + '/users-data-table-async'}>
                  UsersDataTable (async)
                </NavLink>
              </li>
              <li className="list-inline-item">Add User</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Route path={urlPrefix + '/users-list'}>
            <UsersList
              users={users}
              sortConfig={sortConfig}
              sortUsers={handleSortUsers}
            />
          </Route>
          <Route path={urlPrefix + '/users-data-table'}>
            <UsersDataTable
              users={users}
              columns={columns}
              selectRow={( id ) => {
                history.push( urlPrefix + `/details/${id}` );
              }}
            />
          </Route>
          <Route path={urlPrefix + '/users-data-table-async'}>
            <UsersDataTable
              users={asyncUsers}
              columns={columns}
              selectRow={( id ) => {
                history.push( urlPrefix + `/details/${id}` );
              }}
            />
          </Route>
          <Route path={urlPrefix + '/details/:userId'}>
            <UserDetailsWrapper />
          </Route>
        </div>
      </div>
    </section>
  );
}
