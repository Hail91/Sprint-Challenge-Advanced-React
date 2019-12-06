import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import NavBar from './components/NavBar';

test('App renders to screen properly', () => {
  render(<App />)
});

test('NavBar component renders properly', () => {
  render(<NavBar />)
});

test('Home text exists in NavBar', () => {
  const { getByText } = render(<NavBar />);
  getByText(/home/i);
});

test('Search Button exists in NavBar component', () => {
  const { getAllByText } = render(<NavBar />);
  getAllByText(/search/i);
});





