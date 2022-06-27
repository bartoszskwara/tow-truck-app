import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'utilities/test-utils';
import StatsItem from '../StatsItem';

test('renders StatsItem component with data', () => {
    customRender(<StatsItem title="Accidents" value="100" />);
    expect(screen.getByText('accidents')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
});
