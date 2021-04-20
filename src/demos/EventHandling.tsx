import React, { SyntheticEvent, MouseEventHandler } from 'react';

export default function EventHandling(): JSX.Element {
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = ( event ) => {
    console.log( 'You clicked on the button' );
    console.log( 'Event: ', event );
  };

  return (
    <section>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Click me
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Inline event handler</p>
          <button
            className="btn btn-warning"
            onClick={() => console.log( 'inline event handler' )}
          >
            Click me
          </button>
        </div>
      </div>
    </section>
  );
}
