import React, { useState } from 'react';
import { users } from '@speedingplanet/rest-server';
import UsersList from './UsersList';
import { Route, useRouteMatch, NavLink } from 'react-router-dom';
import UsersDataTable from './UsersDataTable';
import { ColumnConfig } from '../components/DataTable';

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  sortField: string;
  lastSortField: string;
  lastSortDirection: SortDirection;
}

export default function UsersView(): JSX.Element {
  const [ sortConfig, setSortConfig ] = useState<SortConfig>( {
    sortField: '',
    lastSortField: '',
    lastSortDirection: 'asc',
  } );

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
            <UsersDataTable users={users} columns={columns} />
          </Route>
        </div>
      </div>
    </section>
  );
}
