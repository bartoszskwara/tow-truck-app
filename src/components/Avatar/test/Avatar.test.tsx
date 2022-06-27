import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'utilities/test-utils';
import Avatar from '../Avatar';

test('renders Avatar component with notifications and driving indicator', () => {
    customRender(
        <Avatar
            name="John Smith"
            src="/avatars/"
            status="driving"
            notifications={2}
        />
    );
    const image = screen.getByRole('img');
    expect(screen.getByText('DRIVING')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/avatars/');
});
