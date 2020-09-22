import React, { Component } from 'react';

import { View }  from './View'
import { Canvas } from './Canvas'

import { SyntheticMouseEvent } from "../lib/SyntheticEvents";

export enum SliderStyles {
    LINEAR_VERTICAL,
    LINEAR_HORIZONTAL,
    ROTARY,
}

//TODO: Add skew?
export interface SliderRange {
    start: number;
    end: number;
    interval: number;
}

//TODO: Pass defaults for range and bipolar
export interface SliderProps {
    range: SliderRange;
    value: number;
    valueAsText: string;
    sliderStyle: SliderStyles;
    bipolar?: boolean;
    onMouseDown?: (e: SyntheticMouseEvent) => void;
    onMouseUp?: (e: SyntheticMouseEvent) => void;
    onValueChanged: (value: number) => void;
    drawSlider: (
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        range: SliderRange,
        value: number,
        valueAsText: string,
        sliderStyle: any,
        bipolar: boolean,
    ) => void;
}

type SliderState = {
    width: number;
    height: number;
};

export class Slider extends Component<SliderProps, SliderState> {
    // During a drag, we hold the value at which the drag started here to
    // ensure smooth behavior while the component state is being updated.
    private valueAtDragStart = 0.0;
    private mouseDownX       = 0;
    private mouseDownY       = 0;

    constructor(props: SliderProps) {
        super(props);

        this._onMeasure = this._onMeasure.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseDrag = this._onMouseDrag.bind(this);
        this._drawSlider = this._drawSlider.bind(this);

        this.state = {
            width: 0,
            height: 0,
        };
    }

    _onMeasure(e: any): void {
        this.setState({
            width: e.width,
            height: e.height,
        });
    }

    _onMouseDown(e: SyntheticMouseEvent): void {
        this.valueAtDragStart = this.props.value;
        this.mouseDownX = e.x;
        this.mouseDownY = e.y;

        if (this.props.onMouseDown)
            this.props.onMouseDown(e);
    }

    _onMouseUp(e: SyntheticMouseEvent): void {
        if (this.props.onMouseUp)
            this.props.onMouseUp(e);
    }

    _onMouseDrag(e: SyntheticMouseEvent): void {
        const dx = e.x - this.mouseDownX;
        const dy = this.mouseDownY - e.y;

        //TODO: Replace sensitivity with a default prop?
        const sensitivity = 1.0 / 200.0;

        const minVal = this.props.range.start;
        const maxVal = this.props.range.end;

        let value = 0.0;

        switch (this.props.sliderStyle) {
            case SliderStyles.LINEAR_VERTICAL:
                {
                    value = Math.max(
                        minVal,
                        Math.min(
                            maxVal,
                            this.valueAtDragStart + dy * sensitivity,
                        ),
                    );
                }
                break;
            case SliderStyles.LINEAR_HORIZONTAL:
                {
                    value = Math.max(
                        minVal,
                        Math.min(
                            maxVal,
                            this.valueAtDragStart + dx * sensitivity,
                        ),
                    );
                }
                break;
            case SliderStyles.ROTARY:
                {
                    value = Math.max(
                        minVal,
                        Math.min(
                            maxVal,
                            this.valueAtDragStart + (dx + dy) * sensitivity,
                        ),
                    );
                }
                break;
            default:
                break;
        }

        this.props.onValueChanged(value);
    }

    _drawSlider(ctx: CanvasRenderingContext2D): void {
        const { width, height } = this.state;

        this.props.drawSlider(
            ctx,
            width,
            height,
            this.props.range,
            this.props.value,
            this.props.valueAsText,
            this.props.sliderStyle,
            this.props.bipolar ? this.props.bipolar : false,
        );
    }

    render() {
        const {
            range,
            value,
            valueAsText,
            onValueChanged,
            sliderStyle,
            bipolar,
            drawSlider,
            ...other
        } = this.props;

        return (
            <View
                {...other}
                onMeasure={this._onMeasure}
                onMouseDown={this._onMouseDown}
                onMouseDrag={this._onMouseDrag}>
                <Canvas
                    autoclear={true}
                    {...styles.canvas}
                    onDraw={this._drawSlider}
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
