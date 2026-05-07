import { Image, useColorScheme } from "react-native";

import DarkLogo from '../assets/img/gold_logo.jpg';
import LightLogo from '../assets/img/blue_logo.png';

const ThemedLogo =({ ...props }) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;
    return(
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo