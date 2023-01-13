import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index';


describe('<Button />', () =>{
    it('shoud render the button with the text', () =>{
        render(<Button text="Load more"/>);       
        expect.assertions(1);
        const button = screen.getByRole('button', { name: /load more/i });      
        expect(button).toBeInTheDocument();
    });

    it('shoud call function button click', () =>{
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn}/>);
        const button = screen.getByRole('button', { name: /load more/i });       
        userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('shoud be disable when disable is true', () =>{
        render(<Button text="Load more" disabled={true} />);
        const button = screen.getByRole('button', { name: /load more/i });        
        expect(button).toBeDisabled();
    });

    it('shoud be enabled when disable is false', () =>{
        render(<Button text="Load more" disabled={false} />);
        const button = screen.getByRole('button', { name: /load more/i });       
        expect(button).toBeEnabled();
    });
});