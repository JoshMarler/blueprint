import React, { useState } from 'react';

import {
  View,
  Text,
  Button
} from 'juce-blueprint';

import { Styles, colors} from "../Styles";
import { ButtonsDemoStyles, drawButton } from './ButtonsDemoStyles'

import { ToggleButton } from './ToggleButton'
import { DrawableButton } from './DrawableButton'
import { RadioGroup } from './RadioGroup'

const ButtonsDemo = (props: any) => {
    const {...other} = props;

    const [toggleButtonColor, setToggleButtonColor] = useState(colors.primaryBackground);
    const [toggleButtonTextColor, setToggleButtonTextColor] = useState(colors.primaryAccent);

    const handleTextButtonClick = () => {
        console.log("Text Button Clicked");
    }

    const handleToggleButtonToggled = (toggled: boolean) => {
        if (toggled) {
            setToggleButtonColor(colors.primaryAccent)
            setToggleButtonTextColor(colors.primaryBackground)
            console.log("Toggle Button Toggled On")
        }
        else {
            setToggleButtonColor(colors.primaryBackground)
            setToggleButtonTextColor(colors.primaryAccent)
            console.log("Toggle Button Toggled Off");
        }
    }

    const handleDrawableButtonClick = () => {
        console.log("Drawable Button Clicked");
    }

    return (
        <View {...other} flex-direction="column">
            <View {...Styles.content_row}>
                <Button onClick={handleTextButtonClick} {...ButtonsDemoStyles.standard_button}>
                    <Text {...ButtonsDemoStyles.button_text} color={colors.primaryAccent}>
                        Text Button
                    </Text>
                </Button>
                <Button onClick={handleTextButtonClick}{...ButtonsDemoStyles.secondary_button}>
                    <Text {...ButtonsDemoStyles.button_text} color={colors.primaryBackground}>
                        Text Button 100% border-radius
                    </Text>
                </Button>
                <ToggleButton onToggled={handleToggleButtonToggled} {...ButtonsDemoStyles.standard_button} background-color={toggleButtonColor}>
                    <Text {...ButtonsDemoStyles.button_text} color={toggleButtonTextColor}>
                        Toggle Button
                    </Text>
                </ToggleButton>
            </View>
            <View {...Styles.content_row}>
                {/*  TODO: Add RadioGroup */}
                {/*  TODO: Add DrawableButtons (Canvas) */}
                {/*  TODO: Add ImageButton  */}
            </View>
        </View>
    )
}

export default ButtonsDemo;