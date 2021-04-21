import React, { ReactElement } from 'react';

export default function ComponentCommunication(): ReactElement {
  return (
    <section>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-light text-center">
              <h4>Parent</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <SiblingOne />
                </div>
                <div className="col">
                  <SiblingTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiblingOne(): ReactElement {
  return (
    <div className="card h-100">
      <div className="card-header bg-secondary text-light text-center">
        <h4>Sibling One</h4>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="message-box">Send a message from here:</label>
          <input type="text" id="message-box" className="form-control" />
        </div>
      </div>
    </div>
  );
}

function SiblingTwo( { message = '' }: { message?: string } ): ReactElement {
  return (
    <div className="card h-100">
      <div className="card-header bg-secondary text-light text-center">
        <h4>Sibling Two</h4>
      </div>
      <div className="card-body">
        <p>To here: {message}</p>
      </div>
    </div>
  );
}
