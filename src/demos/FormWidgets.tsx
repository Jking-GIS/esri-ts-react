import React, { ChangeEvent, ReactElement, useState, useRef } from 'react';

export default function FormWidgets(): ReactElement {
  const [ username, setUsername ] = useState( '' );
  const [ ucUsername, setUcUsername ] = useState( '' );
  const inputRef = useRef<HTMLInputElement>( null );

  const handleUpdateText = ( event: ChangeEvent<HTMLInputElement> ) => {
    setUsername( event.target.value );
  };

  const handleButtonClick = () => {
    if ( inputRef.current ) setUcUsername( inputRef.current.value );
  };

  return (
    <section>
      {/* controlled component */}
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="user-name">Enter your name:</label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              className="form-control"
              onChange={handleUpdateText}
              value={username}
            />
          </div>
          <p>Hello, {username}</p>
        </div>

        {/* uncontrolled component */}
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="uc-user-name">Enter your name:</label>
              <input
                type="text"
                name="uc-user-name"
                id="uc-user-name"
                className="form-control"
                ref={inputRef}
              />
              <button className="btn btn-info mt-2" onClick={handleButtonClick}>
                Say hello!
              </button>
            </div>
            <p>Hello, {ucUsername}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
