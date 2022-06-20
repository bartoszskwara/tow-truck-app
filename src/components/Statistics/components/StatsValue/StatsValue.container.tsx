import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Stats as StatsType } from 'types';
import StatsValueView from "./StatsValue.view";

interface Props {
    item: StatsType;
}

const StatsValueContainer = ({ item }: Props) => {
    const [value, setValue] = useState(0);
    const [max, setMax] = useState<number | undefined>();

    useEffect(() => {
        if ('value' in item) {
            setValue(item.value);
        } else if ('available' in item) {
            setValue(item.available);
            setMax(item.all);
        }
    }, []);

    return <StatsValueView value={value} max={max} item={item} />
};

StatsValueContainer.propTypes = {
    item: PropTypes.oneOfType([
        PropTypes.shape({
            value: PropTypes.number,
        }),
        PropTypes.shape({
            available: PropTypes.number,
            all: PropTypes.number,
        }),
    ]),
};

export default StatsValueContainer;
