import FilterWrapper from "../../2_offers_page/sections/filter/FilterWrapper";
import OffersSection from "../../2_offers_page/OffersSection";
import SeatSelectionPage from "../../3_seats_selection_page/SeatSelectionPage";
import AddPassengerWidget from "../../4_passengers_page/AddPassangerWidget";
import Payment from "../../5_payment_page/Payment";
import Confirm from "../../6_confirm_page/Confirm";
import ThanksPage from "../../7_thnx_page/ThanksPage";

/**
 * изменяющаяся секция под прогрессбаром
 */
export default function MiddleSection(props) {

    let showThis;
    let showLeftFilter = false;
    switch (props.state.display) {
        case 'offers':
            showLeftFilter = true;
            showThis = <OffersSection state={props.state} setState={props.setState}/>
            break;

        case 'seats':
            showThis = <SeatSelectionPage/>
            break;

        case 'passengers':
            showThis = <AddPassengerWidget/>
            break;

        case 'payment':
            showThis = <Payment/>
            break;

        case 'confirm':
            showThis = <Confirm/>
            break;

        case 'thnx':
            showThis = <>
                <div className='thnx'>
                    <ThanksPage/>
                </div>
            </>
            break;

        default:
            return null;

    }

    let filter = null;
    if (showLeftFilter) {
        filter = <FilterWrapper/>
    }

    return (
        <div className='ticket-results'>
            {filter}
            {showThis}
        </div>
    )
}
