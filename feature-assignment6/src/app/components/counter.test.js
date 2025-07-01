
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter'; 

describe('Counter Component', () => {
  
  test('renders with initial count of 0', () => {
  
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('0');
  });

  test('increments count when the increment button is clicked', async () => {
    const user = userEvent.setup();

    render(<Counter />);
    

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await user.click(incrementButton);


    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('1');
  });
  
  test('decrements count when the decrement button is clicked', async () => {
    const user = userEvent.setup();
    

    render(<Counter />);
    

    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await user.click(decrementButton);

 
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('-1');
  });

});