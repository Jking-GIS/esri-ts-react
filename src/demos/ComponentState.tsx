import React, { useState } from 'react';
import BootstrapCard from '../components/BootstrapCard';

export default function ComponentState(): JSX.Element {
  /*
  const record = useState( 0 );
  const counter = record[0];
  const setCounter = record[1];
  */

  // const [ first, second, third ] = [ 1, 2, 3, 4, 5, 6 ];

  const [ counter, setCounter ] = useState( 0 );
  /*
  const [ someFlag, setSomeFlag ] = useState( true );
  const [ someData, setSomeData ] = useState( [] );

  const [ state, setState ] = useState( {
    counter: 0,
    someFlag: true,
    someData: [],
  } );
  */

  return (
    <section>
      <div className="row">
        <div className="col">
          <BootstrapCard title="Component State" bodyClasses="text-center">
            <p>{counter}</p>
            <button
              className="btn btn-primary"
              onClick={() => setCounter( counter + 1 )}
              // onClick={() => setState( counter + 1 )}
              // onClick={() => setState( { ...state, counter: state.counter + 1 } )}
            >
              Increment the counter
            </button>
          </BootstrapCard>
        </div>
      </div>
    </section>
  );
}
