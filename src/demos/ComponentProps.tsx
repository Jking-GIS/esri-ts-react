import { useState } from 'react';
import BootstrapCard from '../components/BootstrapCard';

export default function ComponentProps(): JSX.Element {
  const [ counter, setCounter ] = useState( 0 );
  return (
    <section>
      <div className="row">
        <div className="col">
          <BootstrapCard title="Component Props" bodyClasses="text-center">
            <DisplayValue foo={counter} />
            <button
              className="btn btn-primary"
              onClick={() => setCounter( counter + 1 )}
            >
              Increment
            </button>
          </BootstrapCard>
        </div>
      </div>
    </section>
  );
}

interface DisplayValueProps {
  foo: number;
}

// function DisplayValue( props: DisplayValueProps ): JSX.Element {
function DisplayValue( props: DisplayValueProps ): JSX.Element {
  return <p>{props.foo}</p>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DisplayValueDestructured( { foo }: DisplayValueProps ): JSX.Element {
  return <p>{foo}</p>;
}
