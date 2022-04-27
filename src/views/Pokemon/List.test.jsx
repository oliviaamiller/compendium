import { render, screen } from '@testing-library/react';
import List from './List';

describe('pokemon card - component test suite', () => {
  it('should render a pokemon images', async () => {
    render(<List />);
    
    await screen.findAllByAltText('pokemon');

  });
});
