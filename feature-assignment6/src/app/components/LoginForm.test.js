import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {

  test('renders with username, password fields and a login button', () => {
   
    render(<LoginForm onSubmit={jest.fn()} />);

   
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();


    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('calls the onSubmit function with username and password when submitted', async () => {
    const user = userEvent.setup();

    const mockSubmit = jest.fn();

    render(<LoginForm onSubmit={mockSubmit} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    const testData = {
      username: 'testuser',
      password: 'SuperSecretPassword!',
    };

    await user.type(usernameInput, testData.username);
    await user.type(passwordInput, testData.password);
    await user.click(loginButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);

    expect(mockSubmit).toHaveBeenCalledWith(testData);
  });
});