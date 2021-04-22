import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Counter from './Counter';
import { increment, decrement, ReduxState } from './counter-slice';

const mapStateToProps = ( state: ReduxState ) => ( {
  value: state,
} );

/*
We cannot use the object form
const mapDispatchToProps({increment, decrement})
Because the increment() and decrement() methods will wind up being passed 
the event object (from Counter.js) as an argument, which the Redux toolkit
will treak as the argument to increment, which in turn becomes the payload 
passed to the reducer. Along the way, Redux will complain that we are
passing a non-serializable value (the event object, a class in this case).

Very annoying to track down. But it's much more likely that, outside of this
demo, you will not write
onClick={increment}
as we do in Counter.js, but rather 
onClick={() => callSomeAction(someValue)}
So there is no real fix for this particular issue.
*/
const mapDispatchToProps = ( dispatch: Dispatch ) => ( {
  increment: () => dispatch( increment() ),
  decrement: () => dispatch( decrement() ),
} );

const ReduxCounter = connect( mapStateToProps, mapDispatchToProps )( Counter );

export default ReduxCounter;
