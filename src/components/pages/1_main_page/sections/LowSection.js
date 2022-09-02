import AboutUs from "./about_us/AboutUs";
import HowItWorks from "./how_it_works/HowItWorks";
import FeedbackWidget from "./feedback/FeedbackWidget";
import Footer from "./footer/Footer";

export default function LowSection(props) {
    let showThis;

    switch (props.state.display) {
        case "default":
            showThis = <>
                <AboutUs/>
                <HowItWorks/>
                <FeedbackWidget/>
                <Footer/>
            </>;
            break;

        default:
            showThis = <Footer/>
    }

    return (
        showThis
    );
}
