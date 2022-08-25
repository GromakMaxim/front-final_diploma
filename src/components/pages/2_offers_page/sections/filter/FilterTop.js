import './css/filterTop.css';
import CustomSelectTag from "./components/customSelectTag/CustomSelectTag";
import ShowPartition from "./components/showPartition/ShowPartition";


export default function FilterTop(props) {
    return (
        <div className='filter_top'>
            <div className='found_total'>найдено {props.total}</div>
            <div className='offers_sort'>
                <div className='sort_by'>
                    <label>сортировать по:</label>
                    <CustomSelectTag/>
                </div>
                <div className='show_partition'>
                    <label>показывать по:</label>
                    <ShowPartition items={['5','10','15']}/>
                </div>
            </div>
        </div>
    )
}
