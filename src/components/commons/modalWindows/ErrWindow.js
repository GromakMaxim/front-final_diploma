import './css/err.css';
import './css/rogerBtn.css'

import warning_pic from './img/exclamation.png';
import info_pic from './img/info.png';
import {Component} from "react";


export default class ErrWindow extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        let css;
        let pic;
        if (this.props.type === 'err'){
            css={background: 'rgba(255, 61, 0, 0.38)'}
            pic = warning_pic;
        } else {
            css={background: 'rgba(255, 245, 0, 0.36)'}
            pic=info_pic;
        }



        return (
            <div className='error_window'>
                <div className='err_header' style={css}>
                    <img src={pic}></img>
                </div>

                <h4>{this.props.mainTxt}</h4>
                <label>{this.props.secondaryTxt}</label>

                <div className='err_bottom'>
                    <button className='roger'>Понятно</button>
                </div>
            </div>
        );
    }

}
