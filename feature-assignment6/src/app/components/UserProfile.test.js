import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {  const mockUser = {
    name: 'Aarushi Mahajan',
    email: 'aarushi.m@example.com',
    phone: '123-456-7890',
  };
  test('renders user name, email, and phone number from props', () => {
        render(<UserProfile user={mockUser} />);


    const nameElement = screen.getByRole('heading', { name: /aarushi mahajan/i });
    expect(nameElement).toBeInTheDocument();

    const emailElement = screen.getByText(/aarushi.m@example.com/i);
    const phoneElement = screen.getByText(/123-456-7890/i);

    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
  });

});