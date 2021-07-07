import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('PlayerCard exists', () => {
  const n = <PlayerCard />
;
expect(n).toBeDefined();
expect(n).not.toBeFalsy();
});

it('NavBar renders withour crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

