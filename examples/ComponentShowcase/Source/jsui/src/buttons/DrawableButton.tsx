import React, { useState } from 'react';

import {
  Button,
  Canvas,
  View
} from 'juce-blueprint';

import { Styles  } from '../Styles'

export interface DrawableButtonProps {
    text?: string
    onClick: () => void
    drawButton: (ctx: CanvasRenderingContext2D,
                 width: number,
                 height: number,
                 down: boolean,
                 text?: string) => void,
}

export const DrawableButton = (props: DrawableButtonProps) => {
    const { text, onClick, drawButton, ...other } = props;

    const [down, setDown] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleMeasure = (e: any) => {
        setWidth(e.width);
        setHeight(e.height);
    }

    const handleMouseDown = () => {
        setDown(true);
    }

    const handleMouseUp = () => {
        setDown(false);
    }

    const handleDraw = (ctx: CanvasRenderingContext2D) => {
        props.drawButton(ctx, width, height, down, text);
    }

    return (
        <View onMeasure={handleMeasure}>
          <Button
            onClick={props.onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            {...other}
          >
              <Canvas autoclear={true} onDraw={handleDraw} {...Styles.canvas} />
          </Button>
        </View>
    )
}
