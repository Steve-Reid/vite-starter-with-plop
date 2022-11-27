import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';

describe('App', () => {
  it('should render App heading', () => {
    render(<WrappedApp />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('React Vite Starter');
  });
  it('should render route heading', () => {
    render(<WrappedApp />);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent('Home');
  });
  it('should render Not Found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/bad-route']}>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent('Not Found!?!');
  });
});
