import React, { useState } from 'react';
import {
  Button
} from 'juce-blueprint';

export interface ToggleButtonProps {
    onToggled: (toggled: boolean) => void
}

export const ToggleButton = (props: React.PropsWithChildren<ToggleButtonProps>) => {
    const { onToggled,
            ...other} = props;

    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled);
        onToggled(toggled);
    }

    return (
        <Button onClick={handleClick} {...other} />
    )
}
