import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BootstrapCard from './BootstrapCard';

describe( 'BootstrapCard', () => {
  it( 'should render a title', () => {
    let testTitle = 'testTitle';
    let { getByText } = render(
      <BootstrapCard title={testTitle}>
        <p>Who cares</p>
      </BootstrapCard>,
    );
    expect( getByText( testTitle ) ).toBeInTheDocument();
  } );

  it( 'should render the right header level', () => {
    let { container } = render(
      <BootstrapCard title="whatever" titleLevel="2">
        <span>Whatever</span>
      </BootstrapCard>,
    );

    expect( container.querySelector( 'h2' ) ).not.toBeNull();
  } );
} );
