import React, { ReactElement } from 'react';
import { User } from '@speedingplanet/rest-server';
import DataTable, { ColumnConfig } from '../components/DataTable';

interface Props {
  users: User[];
  columns: ColumnConfig[];
}

export default function UsersDataTable( {
  users,
  columns,
}: Props ): ReactElement {
  return (
    <section>
      <h4>Users List</h4>
      <DataTable data={users} columns={columns} />
    </section>
  );
}
