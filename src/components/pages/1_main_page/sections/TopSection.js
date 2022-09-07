import ThnxWidget from "../../7_thnx_page/components/ThnxWidget";
import HorizontalWidget from "../../../commons/horizontalSearch/HorizontalWidget";
import Progressbar from "../../../commons/progressbar/Progressbar";
import RoutesSearchWidget from "../../../commons/routesSearch/RoutesSearchWidget";

export default function TopSection(props) {
    let showThis = null;
    let progressbarStage = '1';

    switch (props.state.display) {
        case 'routes':
        case 'seats':
            showThis = <>
                <HorizontalWidget state={props.state}/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'passengers':
            progressbarStage = '2'
            showThis = <>
                <HorizontalWidget state={props.state}/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'payment':
            progressbarStage = '3'
            showThis = <>
                <HorizontalWidget state={props.state}/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'confirm':
            progressbarStage = '4'
            showThis = <>
                <HorizontalWidget state={props.state}/>
                <Progressbar stage={progressbarStage}/>
            </>
            break;

        case 'thnx':
            showThis = <>
                <ThnxWidget/>
            </>
            break;
    }

    return (
        <RoutesSearchWidget state={props.state} setState={props.setState} type='default'/>
    );
}
