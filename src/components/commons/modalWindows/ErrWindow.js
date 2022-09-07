import './css/err.css';
import './css/rogerBtn.css'

import warning_pic from './img/exclamation.png';
import info_pic from './img/info.png';
import cloneFunc from "../../../service/CloneFunc";


export default function ErrWindow(props) {


    async function okImUnderstand() {
        let temp = props.state;
        temp.error = null;
        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    let css;
    let pic;
    if (props.type === 'err') {
        css = {background: 'rgba(255, 61, 0, 0.38)'}
        pic = warning_pic;
    } else {
        css = {background: 'rgba(255, 245, 0, 0.36)'}
        pic = info_pic;
    }

    return (
        <div className='error_window'>
            <div className='err_header' style={css}>
                <img src={pic} alt='warning or info icon'/>
            </div>

            <h4>{props.mainText}</h4>
            <label>{props.secondaryText}</label>

            <div className='err_bottom'>
                <button className='roger' onClick={okImUnderstand}>Понятно</button>
            </div>
        </div>
    );

}
