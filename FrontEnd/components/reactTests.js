import React from 'React';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../FrontEnd/App';
import Login from '../FrontEnd/components/Login';
import Homepage from '../FrontEnd/components/Homepage';
import Profile from '../FrontEnd/components/Profile';
import CardFeed from '../FrontEnd/components/CardFeed';
import Card from '../FrontEnd/components/Card';

//test that login has two input fields, one for username and one for password
    //two buttons one labeled submit and another labeled login

//test that homepage has a nav bar, a view map button

//test that on profile user can successfully add an item
describe('item', () => {
    const props = {
        name: 'FrankiedoodleBunnyRaptor',
        rentalPeriod: 'an quick bronze age',
        description: 'do not use in the shower',
        address: '6969 your mom\'s house'
    }

    beforeAll(() => {
        render(<Profile {...props} />)
  
      });

    test('adds item to user profile', () => {
        expect(addItem(props)).toEqual()
    })
    
//test profile that user can successfully delete item
    test('deletes item from user profile', () => {
        expect(deleteItem(props)).toBe(null);
    })
    
});