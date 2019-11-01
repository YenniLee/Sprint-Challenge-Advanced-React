import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('App renders without crashing', () => {
  rtl.render(<App />)
});

test('World Cup text is displayed on screen', async () => {
  const container = rtl.render(<App />)
  expect(container.queryByText('World Cup'))
})

test('Alex Morgan', async () => {
  const container = rtl.render(<App />)
  expect(container.queryByText('Alex Morgan'))
})

test('contains PlayersList div', () => {
  const container = rtl.render(<App />);
  container.getByTestId('playersList');
})