import React from 'react';

import {
    View,
    Text,
} from 'juce-blueprint';

import { HeaderStyles } from "./HeaderStyles";

const Header = () => {
   return (
       <View>
           <Text {...HeaderStyles.header_text}>
               BLUEPRINT COMPONENT SHOWCASE
           </Text>
       </View>
   )
}

export default  Header;
