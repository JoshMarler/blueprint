import React from 'react';

import {
    View,
    Text,
    Button
} from 'juce-blueprint'

import { SideNavStyles } from './SideNavStyles'

interface SideNavItemProps {
    name: string
    onClicked: () => void;
}

const SideNavItem = (props: SideNavItemProps | any) => {
    const { onClicked, name, ...other} = props;
    return (
        <View {...other}>
            <Button onClick={props.onClicked} {...SideNavStyles.nav_item_button}>
                <Text {...SideNavStyles.nav_item_text} >
                    { props.name }
                </Text>
            </Button>
        </View>
    )
}

export interface SideNavProps {
    navItems: string[]
    navItemSelected: (navItem: string) => void
}

const SideNav = (props: SideNavProps) => {
    const { navItems, navItemSelected, ...other } = props;

    const handleNavItemClick = (item: string) => {
        navItemSelected(item);
    }

    let items =
        navItems.map((item: string, index: number) =>
            <SideNavItem
                width="100%"
                height="7.5%"
                margin-top={ index > 0 ? 7 : 0 }
                key={index}
                name={item}
                onClicked={() => handleNavItemClick(item)}
            />
        );

    return (
        <View {...SideNavStyles.items_container} {...other}>
            { items }
        </View>
    )
}

export default SideNav;