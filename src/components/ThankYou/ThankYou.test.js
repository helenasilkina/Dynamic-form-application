import { render, screen } from '@testing-library/react';
import ThankYou from './ThankYou';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store/store';

test('renders Thank you page', () => {
    render(<Provider store={store}>
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<ThankYou />}
                />
            </Routes>
        </Router>
    </Provider>);
    const h2Element = screen.getByText('Thank You for Successful Login');
    expect(h2Element).toBeInTheDocument();
});