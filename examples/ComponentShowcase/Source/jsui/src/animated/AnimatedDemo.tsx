import React, { useState } from 'react';

import {
    View,
    Text,
} from 'juce-blueprint';

import { Styles, colors} from "../Styles";

const AnimatedDemo = (props: any) => {
    const { ...other } = props;
    return (
        <View {...other}>
            <Text font-size={18.0} line-spacing={1.6} color={colors.primaryAccent}>
                TODO: Implement AnimatedDemo!
            </Text>
        </View>
    )
}

export default AnimatedDemo;
