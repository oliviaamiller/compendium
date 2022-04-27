import { render, screen, waitFor } from '@testing-library/react';
import List from './List';
import userEvent from '@testing-library/user-event';

describe('pokemon list - component test', () => {
  it('should render pokemon images', async () => {
    render(<List />);

    // find all the images that are rendered in the list by the alt tag
    await screen.findAllByAltText('pokemon');
  });
});

describe('pokemon list - behavioral test', () => {
  it('should render Pikachu when Pikachu is searched for', async () => {
    render(<List />);

    // find the filter input
    const filter = screen.getByPlaceholderText('search by name');

    // user is searching for 'pikachu'
      userEvent.type(filter, 'pikachu');

    // check that only 'pikachu' renders
    const result = await screen.findByText('pikachu', {timeout: 2000});
    expect(result.textContent).toEqual('pikachu');
  });
});
