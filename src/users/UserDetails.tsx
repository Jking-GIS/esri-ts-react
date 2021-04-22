import { DaoData, User, ZippayRecord } from '@speedingplanet/rest-server';
import React, { ReactElement } from 'react';

interface Props {
  user?: DaoData<User> | undefined;
}

export default function UserDetails( { user }: Props ): ReactElement {
  return (
    <div>
      <div className="col">
        <div className="row">
          <h4>Name: {user?.data.displayName}</h4>
        </div>
        <div className="row">
          <img src={user?.data.picture.large} alt="nothing"></img>
        </div>
        <div className="row">
          Address: {user?.data.address.city}, {user?.data.address.state}
        </div>
        <div className="row">User Type: {user?.data.userType}</div>
        <div className="row">Last Updated: {user?.data.lastUpdated}</div>
      </div>
    </div>
  );
}
