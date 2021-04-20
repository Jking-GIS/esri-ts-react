import React, { useState } from 'react';

export default function ComponentState(): JSX.Element {
  const [ counter, setCounter ] = useState( 0 );

  return (
    <section>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => {
              setCounter( counter + 1 );
            }}
          >
            Increment the counter
          </button>
        </div>
        <div className="col">
          <p>{counter}</p>
        </div>
      </div>
    </section>
  );
}
