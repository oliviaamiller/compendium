import { render, screen } from '@testing-library/react';
import App from './App';

describe('pokemon card - component test suite', () => {
  it('should render a pokemon image', async () => {
    render(<App />);

    screen.getByText('loading...');

    await screen.getByAltText('pokemon');
  });
});
