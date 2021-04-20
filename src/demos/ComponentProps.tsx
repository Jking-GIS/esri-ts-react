import React, { useState } from 'react';

export default function ComponentProps(): JSX.Element {
  const [ counter, setCounter ] = useState( 0 );

  return (
    <section>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => setCounter( counter + 1 )}
          >
            Increment
          </button>
        </div>
        <div className="col">
          <DisplayValue value={counter} />
        </div>
      </div>
    </section>
  );

  function DisplayValue( props: { value: number } ): JSX.Element {
    return <p>{props.value}</p>;
  }
}
