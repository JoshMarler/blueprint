import React, { Component } from 'react';

import { View } from './View'
import { Canvas } from './Canvas'
import { SyntheticMouseEvent } from '../lib/SyntheticEvents'

export interface ButtonProps {
    text: string;
    drawButton: (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        down: boolean,
        text: string,
    ) => void;
    onMouseDown?: (e: SyntheticMouseEvent) => void;
    onMouseUp?: (e: SyntheticMouseEvent) => void;
}

type ButtonState = {
    width: number;
    height: number;
    down: boolean;
};

export class Button extends Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);

        this._onMeasure = this._onMeasure.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseUp = this._onMouseUp.bind(this);
        this._drawButton = this._drawButton.bind(this);

        this.state = {
            width: 0,
            height: 0,
            down: false,
        };
    }

    _onMeasure(e: any): void {
        this.setState({
            width: e.width,
            height: e.height,
        });
    }

    _onMouseDown(e: SyntheticMouseEvent): void {
        if (typeof this.props.onMouseDown === 'function')
            this.props.onMouseDown.call(null, e);

        this.setState({
            down: true,
        });
    }

    _onMouseUp(e: SyntheticMouseEvent): void {
        if (typeof this.props.onMouseUp === 'function')
            this.props.onMouseUp.call(null, e);

        this.setState({
            down: false,
        });
    }

    _drawButton(ctx: CanvasRenderingContext2D): void {
        const { width, height, down } = this.state;
        this.props.drawButton(ctx, width, height, down, this.props.text);
    }

    render() {
        const { onMouseUp, onMouseDown, drawButton, ...other } = this.props;

        return (
            <View
                onMouseDown={this._onMouseDown}
                onMeasure={this._onMeasure}
                {...other}>
                <Canvas
                    autoclear={true}
                    {...styles.canvas}
                    onDraw={this._drawButton}
                />
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    canvas: {
        width: '100%',
        height: '100%',
        interceptClickEvents: false,
    },
};
