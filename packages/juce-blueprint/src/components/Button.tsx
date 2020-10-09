import React, { useState } from 'react';

import { View } from './View'
import { SyntheticMouseEvent } from '../lib/SyntheticEvents'

export interface ButtonProps {
    onClick: () => void;
    onMouseDown?: (e: SyntheticMouseEvent) => void;
    onMouseUp?: (e: SyntheticMouseEvent) => void;
}

/**
 * A simple Button component which can be used as a building block
 * for more complex button types.
 *
 * @example
 *
 * <Button onClick={() => { console.log("clicked"); }} {...styles.button}>
 *   <Text>
       Hello World
 *   </Text>
 * </Button>
 *
 * const styles = {
 *   text: {
 *     'font-size': 18.0,
 *     'line-spacing': 1.6,
 *     'color': 'ff626262'
 *   },
 *   button: {
 *     'justify-content': 'center',
 *     'align-items': 'center',
 *     'width': '100%',
 *     'height': '100%',
 *     'border-radius': 5.0,
 *     'border-width': 2.0,
 *     'border-color': 'ff626262'
 *   }
 * };
 *
 */
export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const { onClick, onMouseDown, onMouseUp, ...other } = props;

    const [down, setDown] = useState(false);

    const handleDown = (e: SyntheticMouseEvent) => {
        if (typeof onMouseDown === 'function')
            onMouseDown.call(null, e);

        setDown(true);
    }

    const handleUp = (e: SyntheticMouseEvent) => {
        if (typeof onMouseUp === 'function')
            onMouseUp.call(null, e);

        setDown(false);
        onClick();
    }

    return (
        <View
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            opacity={ down ? 0.8 : 1.0}
            {...other}
        >
            {props.children}
        </View>
    )
}

