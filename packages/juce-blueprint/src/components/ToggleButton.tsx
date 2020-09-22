import React, { Component } from 'react';

import { View } from './View'
import { Button } from './Button';

export interface ToggleButtonProps {
    toggled: boolean;
    text: string;
    onToggled: (toggled: boolean) => void;
    drawToggleButton: (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        toggled: boolean,
        text: string,
    ) => void;
}

type ToggleButtonState = {
    width: number;
    height: number;
};

export class ToggleButton extends Component<
    ToggleButtonProps,
    ToggleButtonState
> {
    constructor(props: ToggleButtonProps) {
        super(props);

        this._onMeasure = this._onMeasure.bind(this);
        this._onButtonDown = this._onButtonDown.bind(this);
        this._drawButton = this._drawButton.bind(this);

        this.state = {
            width: 0,
            height: 0,
        };
    }

    _onMeasure(e: any) {
        this.setState({
            width: e.width,
            height: e.height,
        });
    }

    _onButtonDown(e: any) {
        this.props.onToggled(!this.props.toggled);
    }

    _drawButton(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        down: boolean,
        text: string,
    ) {
        this.props.drawToggleButton(
            ctx,
            width,
            height,
            this.props.toggled,
            text,
        );
    }

    render() {
        const { drawToggleButton, onToggled, ...other } = this.props;
        return (
            <View onMeasure={this._onMeasure} {...other}>
                <Button
                    {...styles.button}
                    text={this.props.text}
                    onMouseDown={this._onButtonDown}
                    drawButton={this._drawButton}
                >
                </Button>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    button: {
        width: '100%',
        height: '100%',
    },
};
