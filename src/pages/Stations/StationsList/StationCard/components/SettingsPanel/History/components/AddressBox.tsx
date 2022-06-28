import React from 'react';
import Text from 'components/Text';
import { Address } from 'types';

const AddressBox = ({ street, city, region, zipcode, country }: Address) => (
    <>
        <Text text={street} sx={{ margin: 0, padding: 0 }} component="p" />
        <Text
            text={`${city}, ${region} ${zipcode}`}
            sx={{ margin: 0, padding: 0 }}
            component="p"
        />
        <Text text={country} sx={{ margin: 0, padding: 0 }} component="p" />
    </>
);

export default AddressBox;
