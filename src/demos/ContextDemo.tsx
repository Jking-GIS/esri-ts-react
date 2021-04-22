import React, { ReactNode, useContext } from 'react';
import { noop } from 'lodash';

const DemoContext = React.createContext( {
  message: '',
  sendMessage: noop,
} );

export default class ContextDemo extends React.Component<
  unknown,
  { message: string; sendMessage: ( message: string ) => void }
> {
  constructor( props: unknown ) {
    super( props );

    const sendMessage = ( message: string ) => {
      this.setState( { message } );
    };

    this.state = {
      message: 'Initial message',
      sendMessage,
    };
  }

  render(): ReactNode {
    return (
      <DemoContext.Provider value={this.state}>
        <div className="row">
          <div className="col">
            <Left />
          </div>
          <div className="col">
            <Right />
          </div>
        </div>
      </DemoContext.Provider>
    );
  }
}

function Left() {
  return (
    <div>
      <h2>Left</h2>
      <LeftOne />
    </div>
  );
}

function LeftOne() {
  return (
    <div>
      <h3>LeftOne</h3>
      <LeftTwo />
    </div>
  );
}

function LeftTwo() {
  return (
    <div>
      <h4>LeftTwo</h4>
      {/* Toggle these */}
      {/* <LeftThree /> */}
      {/* <LeftThreeHook /> */}
      <LeftThreeClass />
    </div>
  );
}

// eslint-disable-next-line
function LeftThree() {
  return (
    <div>
      <h5>LeftThree</h5>
      <DemoContext.Consumer>
        {( { message, sendMessage } ) => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => sendMessage( 'updated value' )}
            >
              Change value
            </button>
          );
        }}
      </DemoContext.Consumer>
    </div>
  );
}

// eslint-disable-next-line
function LeftThreeHook() {
  const { sendMessage } = useContext( DemoContext );
  return (
    <div>
      <h5>LeftThree</h5>
      <button
        className="btn btn-primary"
        onClick={() => sendMessage( 'updated value' )}
      >
        Change value
      </button>
    </div>
  );
}

class LeftThreeClass extends React.Component {
  render() {
    const { sendMessage } = this.context;
    return (
      <div>
        <h5>LeftThree</h5>
        <button
          className="btn btn-primary"
          onClick={() => sendMessage( 'updated value' )}
        >
          Change value
        </button>
      </div>
    );
  }
}

LeftThreeClass.contextType = DemoContext;

function Right() {
  return (
    <div>
      <h2>Right</h2>
      <RightOne />
    </div>
  );
}

function RightOne() {
  return (
    <div>
      <h3>RightOne</h3>
      <RightTwo />
    </div>
  );
}

function RightTwo() {
  return (
    <div>
      <h4>RightTwo</h4>
      <RightThree />
    </div>
  );
}

function RightThree() {
  return (
    <div>
      <h5>RightThree</h5>
      <DemoContext.Consumer>
        {/* {({ message }) => <span>Current message: {message}</span>} */}
        {( contextObject ) => (
          <span>Current message: {contextObject.message}</span>
        )}
      </DemoContext.Consumer>
    </div>
  );
}
