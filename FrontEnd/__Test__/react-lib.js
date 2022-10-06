import React from 'React';
// import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../FrontEnd/App';
import Login from '../FrontEnd/components/Login';
import Homepage from '../FrontEnd/components/Homepage';
import Profile from '../FrontEnd/components/Profile';
import CardFeed from '../FrontEnd/components/CardFeed';
import Card from '../FrontEnd/components/Card';

describe('Unit testing React prop drilling', () => {

    describe('ItemCard', () => {
      let fakeItemCard;
  
      const props = {
        itemName: 'Coin Collection',
        itemDescription: 'A collection of modern coins from around the world.',
        itemLocation: '252 S Brand Blvd Suite A, Glendale, CA 91204',
      };
  
      beforeEach(() => {
        fakeItemCard = render(<ItemCard {...props} />);
      });

      // 1. test that props are being passed down to the item card
      test('Renders the passed-in text', () => {
        expect(fakeItemCard.getByText('Item Name:').nextSibling).toHaveTextContent('Coin Collection');
        expect(fakeItemCard.getByText('Item Description:').nextSibling).toHaveTextContent('A collection of modern coins from around the world.');
        expect(fakeItemCard.getByText('Item Address:').nextSibling).toHaveTextContent('252 S Brand Blvd Suite A, Glendale, CA 91204');
      });
    });
  
    // 2. test if item card has button needed to borrow items
    test(' It should also contain a buttons for borrowing item', () => {
        // don't need to render here b/c used beforeEach isntead of before all
      expect(fakeItemCard2.getByRole('button')).toHaveTextContent('reserve this item');
    });

    // 3. Test that the type for each prop is correct 


});

