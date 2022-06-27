import React, { HTMLAttributes, useState } from 'react';
import StationCardView from './StationCard.view';

const StationCardContainer = React.forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>((divProps, ref) => {
    const [expanded, setExpanded] = useState(false);
    const onExpand = () => setExpanded((prev) => !prev);

    return (
        <StationCardView
            ref={ref}
            expanded={expanded}
            onSettingsToggle={onExpand}
            {...divProps}
        />
    );
});
StationCardContainer.displayName = 'StationCardContainer';

export default StationCardContainer;
