import React, { ReactElement, useEffect, useState } from 'react';
import { dao, User, DaoData } from '@speedingplanet/rest-server';
import { useParams } from 'react-router';
import UserDetails from './UserDetails';

interface Props {
  userId?: string;
}

export default function UserDetailsWrapper(): ReactElement {
  const { userId } = useParams<Props>();
  const [ user, setUser ] = useState<DaoData<User>>();

  useEffect( () => {
    if ( userId ) {
      dao.findUserById( userId ).then( ( user ) => {
        setUser( user );
      } );
    }
  }, [ userId ] );

  return (
    <div>
      <UserDetails user={user} />
    </div>
  );
}
