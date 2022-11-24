import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render Hello World', async () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('Hello World!');
  });
});
