import React, { ReactElement } from 'react';
import { User, ZippayRecord } from '@speedingplanet/rest-server';
import DataTable, { ColumnConfig } from '../components/DataTable';

interface Props {
  users: User[];
  columns: ColumnConfig[];
  selectRow?: ( id: string ) => void;
}

export default function UsersDataTable( {
  users,
  columns,
  selectRow,
}: Props ): ReactElement {
  const handleSelectRow = ( record: ZippayRecord ) => {
    if ( selectRow ) selectRow( record.id );
  };

  return (
    <section>
      <h4>Users List</h4>
      <DataTable data={users} columns={columns} selectRow={handleSelectRow} />
    </section>
  );
}
