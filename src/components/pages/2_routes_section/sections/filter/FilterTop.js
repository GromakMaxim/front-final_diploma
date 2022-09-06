import './css/filterTop.css';
import CustomSelectTag from "./components/customSelectTag/CustomSelectTag";
import ShowPartition from "./components/showPartition/ShowPartition";


/**
 * block with sorting/filter
 * (экран выбора направлений)
 */
export default function FilterTop(props) {
    let totalFound;
    if (props.state.routes === null || props.state.routes === undefined) {
        totalFound = '-'
    } else {
        totalFound = props.state.routes.total_count;
    }

    return (
        <div className='filter_top'>
            <div className='found_total'>найдено {totalFound}</div>
            <div className='routes_sort'>
                <div className='sort_by'>
                    <label>сортировать по:</label>
                    <CustomSelectTag sort={props.sort}/>
                </div>
                <div className='show_partition'>
                    <label>показывать по:</label>
                    <ShowPartition items={['5', '10', '15']}/>
                </div>
            </div>
        </div>
    )
}
