import FilterWrapper from "../../2_routes_section/sections/filter/FilterWrapper";
import RoutesSection from "../../2_routes_section/RoutesSection";
import SeatSelectionPage from "../../3_seats_selection_page/SeatSelectionPage";
import AddPassengerWidget from "../../4_passengers_page/AddPassangerWidget";
import Payment from "../../5_payment_page/Payment";
import Confirm from "../../6_confirm_page/Confirm";
import ThanksPage from "../../7_thnx_page/ThanksPage";

/**
 * изменяющаяся секция под прогрессбаром
 */
export default function MiddleSection(props) {
    /**
     * default -> routes -> seats -> passengers - > payment -> confirm -> thnx
     * (defines what actually to display in middle section)
     */

    let showThis;
    let showLeftFilter = false;
    switch (props.state.display) {
        case 'routes':
            showLeftFilter = true;
            showThis = <RoutesSection state={props.state} setState={props.setState}/>
            break;

        case 'seats':
            showLeftFilter = true;
            showThis = <SeatSelectionPage state={props.state} setState={props.setState}/>
            break;

        case 'passengers':
            showLeftFilter = true;
            showThis = <AddPassengerWidget state={props.state} setState={props.setState}/>
            break;

        case 'payment':
            showThis = <Payment state={props.state} setState={props.setState}/>
            break;

        case 'confirm':
            showThis = <Confirm state={props.state} setState={props.setState}/>
            break;

        case 'thnx':
            showThis = <>
                <div className='thnx'>
                    <ThanksPage state={props.state} setState={props.setState}/>
                </div>
            </>
            break;

        default:
            return null;

    }

    let filter = null;
    if (showLeftFilter) {
        filter = <FilterWrapper state={props.state} setState={props.setState}/>
    }

    return (
        <div className='refreshing_area'>
            <div className='middle_wrapper'>
                {filter}
                {showThis}
            </div>
        </div>
    )
}
