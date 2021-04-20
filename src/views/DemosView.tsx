import React from 'react';
import { Link, Route } from 'react-router-dom';
import ComponentProps from '../demos/ComponentProps';
import ComponentState from '../demos/ComponentState';
import EventHandling from '../demos/EventHandling';

export default function DemosView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Demos</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-unstyled">
            <li>
              <Link to="/demos/event-handling">Event Handling</Link>
            </li>
            <li>
              <Link to="/demos/component-state">Component State</Link>
            </li>
            <li>
              <Link to="/demos/component-props">Component Props</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Route path="/demos/event-handling">
            <EventHandling />
          </Route>
          <Route path="/demos/component-state">
            <ComponentState />
          </Route>
          <Route path="/demos/component-props">
            <ComponentProps />
          </Route>
        </div>
      </div>
    </section>
  );
}
