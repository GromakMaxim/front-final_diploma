import './css/style.css';

import arrow_l_pic from './img/left-chevron.png';
import arrow_r_pic from './img/right-chevron.png';

export default function Pagination(props) {
    return (
        <div className='routes_pagination'>
            <div className='pagination_item'>
                <img className='pagination_left pagination_arrow' src={arrow_l_pic} alt='pagination left arrow'></img>
            </div>

            <div className='pagination_item'>1</div>
            <div className='pagination_item'>2</div>
            <div className='pagination_item'>3</div>

            <div className='pagination_item'>
                <img className='pagination_right pagination_arrow' src={arrow_r_pic} alt='pagination right arrow'></img>
            </div>
        </div>
    );
}
