import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import ModalComponent from './ModalComponent';
import Button from '@mui/material/Button';
const ModalTestHarness = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ModalComponent
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Modal Title"
      >
        This is the content inside the modal.
      </ModalComponent>
    </div>
  );
};


describe('ModalComponent', () => {

  test('modal is not in the document initially', () => {
    render(<ModalTestHarness />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('modal appears when the open button is clicked', async () => {
    const user = userEvent.setup();
    render(<ModalTestHarness />);
    const openButton = screen.getByRole('button', { name: /open modal/i });
    await user.click(openButton);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    
    expect(screen.getByText(/test modal title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is the content inside the modal/i)).toBeInTheDocument();
  });

  test('modal closes when the close button is clicked', async () => {
    const user = userEvent.setup();
    render(<ModalTestHarness />);

    await user.click(screen.getByRole('button', { name: /open modal/i }));

  
    expect(screen.getByRole('dialog')).toBeInTheDocument();

   
    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });


});