import ThnxWidget from "../../7_thnx_page/components/ThnxWidget";
import Logo from "./logo/Logo";
import NavigationMenu from "./navigation_menu/NavigationMenu";
import HorizontalWidget from "../../../commons/horizontalSearch/HorizontalWidget";
import Progressbar from "../../../commons/progressbar/Progressbar";
import DefaultWidget from "./search_offers/DefaultWidget";

export default function TopSection(props) {
    let showThis = null;
    let progressbarStage = '1';


    let classes;
    if (props.state.display === 'default') {
        classes = 'main-page bgr2';
    } else {
        classes = 'main-page bgr1';
    }

    switch (props.state.display) {
        case 'offers':
        case 'seats':
            showThis = <>
                <HorizontalWidget/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'passengers':
            progressbarStage = '2'
            showThis = <>
                <HorizontalWidget/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'payment':
            progressbarStage = '3'
            showThis = <>
                <HorizontalWidget/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'confirm':
            progressbarStage = '4'
            showThis = <>
                <HorizontalWidget/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'thnx':
            showThis = <>
                <ThnxWidget/>
            </>
            break;

        default:
            showThis = <DefaultWidget setState={props.setState} state={props.state}/>

    }

    return (
        <>
            <Logo/>
            <NavigationMenu/>
            {showThis}
        </>
    );
}
