import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import ComponentCommunication from './ComponentCommunication';
import ComponentProps from './ComponentProps';
import ComponentState from './ComponentState';
import EffectHook from './EffectHook';
import EventHandling from './EventHandling';
import FormWidgets from './FormWidgets';
import ParentChildCommunication from './ParentChildCommunication';
import RenderList from './RenderList';

export default function DemosView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col text-center mb-2">
          <h2>Demos</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <ul className="list-unstyled">
            <li>
              <NavLink
                to="/demos/event-handling"
                activeClassName="font-weight-bold"
              >
                Event Handling
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/component-state"
                activeClassName="font-weight-bold"
              >
                Component State
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/component-props"
                activeClassName="font-weight-bold"
              >
                Component Props
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/component-communication"
                activeClassName="font-weight-bold"
              >
                Component Communication
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/effect-hook"
                activeClassName="font-weight-bold"
              >
                Effect Hook
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/form-widgets"
                activeClassName="font-weight-bold"
              >
                Form Widgets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/parent-child-communication"
                activeClassName="font-weight-bold"
              >
                Parent Child Communication
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demos/render-list"
                activeClassName="font-weight-bold"
              >
                Render List
              </NavLink>
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
          <Route path="/demos/component-communication">
            <ComponentCommunication />
          </Route>
          <Route path="/demos/effect-hook">
            <EffectHook />
          </Route>
          <Route path="/demos/form-widgets">
            <FormWidgets />
          </Route>
          <Route path="/demos/parent-child-communication">
            <ParentChildCommunication />
          </Route>
          <Route path="/demos/render-list">
            <RenderList />
          </Route>
        </div>
      </div>
    </section>
  );
}
