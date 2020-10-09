import React, {useState} from 'react';

import { View } from 'juce-blueprint';

import Header     from "./header/Header";
import SideNav    from './sidenav/SideNav'
import {colors, Styles} from "./Styles";

// Demos
import ViewDemo        from './view/ViewDemo';
import ButtonsDemo     from './buttons/ButtonsDemo';
import SlidersDemo     from "./sliders/SlidersDemo";
import ImageDemo       from "./image/ImageDemo";
import CanvasDemo      from "./canvas/CanvasDemo";
import AnimatedDemo    from "./animated/AnimatedDemo";
import DragAndDropDemo from "./draganddrop/DragAndDropDemo";
import ListViewDemo    from "./listview/ListViewDemo";
import MiscDemo        from "./misc/MiscDemo";

const navItems = [
    'View',
    'Buttons',
    'Sliders',
    'Image',
    'Canvas',
    'Animated',
    'Drag And Drop',
    'List View',
    'Misc',
];

interface DemoProps {
   demo: string
}
const Demo = (props: DemoProps | any) => {
    const { ...other } = props;

    if (props.demo == "View")
        return <ViewDemo {...other} />
    else if (props.demo == "Buttons")
        return <ButtonsDemo {...other} />
    else if (props.demo == "Sliders")
        return <SlidersDemo {...other} />
    else if (props.demo == "Image")
        return <ImageDemo {...other} />
    else if (props.demo == "Canvas")
        return <CanvasDemo {...other} />
    else if (props.demo == "Animated")
        return <AnimatedDemo {...other} />
    else if (props.demo == "Drag And Drop")
        return <DragAndDropDemo {...other} />
    else if (props.demo == "List View")
        return <ListViewDemo {...other} />
    else if (props.demo == "Misc")
        return <MiscDemo {...other} />
    else
        return null;
}

const App = () => {
  const [currentDemo, setCurrentDemo]  = useState("View")

  const handleNavItemSelected = (item: string) => {
      setCurrentDemo(item);
  }

  return (
      <View {...Styles.container}>
          <View flex-direction="column">
              <View {...styles.header_content}>
                  {/*<Header />*/}
              </View>
              <View {...styles.center_content}>
                  <SideNav {...styles.sidenav} navItems={navItems} navItemSelected={handleNavItemSelected} />
                  <Demo demo={currentDemo} {...styles.demo} />
              </View>
          </View>
      </View>
  );
}

const styles = {
  header_content: {
      'justify-content': "center",
      'align-items': "center",
      'height': '10%',
  },
  center_content: {
    'flex': 1.0,
    'justify-content': 'space-between',
    'flex-direction': 'row',
    'padding': 10
  },
  sidenav: {
    'width': '15%'
  },
  demo: {
      'width': '83%',
      'align-items': 'center',
      'justify-content': 'center',
      'border-color': colors.primaryAccent,
      'border-radius': 5,
      'border-width':  2,
      'padding': 10
  },
};

export default App;
