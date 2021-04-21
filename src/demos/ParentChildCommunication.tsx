import React, { ReactElement, useState } from 'react';

export default function ParentChildCommunication(): ReactElement {
  return (
    <section className="">
      <div className="row">
        <div className="col">
          <Parent />
        </div>
      </div>
    </section>
  );
}

function Parent(): ReactElement {
  const [ message, setMessage ] = useState( '' );

  const handleTellParent = ( message: string ) => {
    console.log( 'Message from child: ', message );
    setMessage( message );
  };

  return (
    <div style={{ border: '2px red solid', padding: '15px' }}>
      <div>
        <h4>Parent</h4>
        <p>Message from child: {message}</p>
        <div>
          <Child foo="this is foo" tellParent={handleTellParent} />
        </div>
      </div>
    </div>
  );
}

interface ChildProps {
  foo: string;
  tellParent: ( message: string ) => void;
}

function Child( props: ChildProps ): ReactElement {
  const handleButtonClick = () => {
    props.tellParent( 'This is coming from the child' );
  };

  return (
    <div style={{ border: '2px blue solid' }}>
      <h4>Child</h4>
      <p>props.foo {props.foo}</p>
      <div>
        <button className="btn btn-success" onClick={handleButtonClick}>
          Send a message
        </button>
      </div>
    </div>
  );
}
