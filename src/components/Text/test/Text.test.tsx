import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'utilities/test-utils';
import Text from '../Text';

jest.mock('assets/labels', () => {
    return [
        {
            name: 'MyLabel',
            translations: {
                en: 'My Translation {}',
            },
        },
    ];
});

test('renders Text component with translation', () => {
    customRender(<Text name="MyLabel" variables={['My Name']} />);
    expect(screen.getByText('My Translation My Name')).toBeInTheDocument();
});
