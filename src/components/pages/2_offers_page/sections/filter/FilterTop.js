import './css/filterTop.css';
import CustomSelectTag from "./components/customSelectTag/CustomSelectTag";
import ShowPartition from "./components/showPartition/ShowPartition";


export default function FilterTop(props) {
    let totalFound;
    if (props.routes === null || props.routes === undefined) {
        totalFound = '-'
    } else {
        totalFound = props.routes.items.length;
    }

    return (
        <div className='filter_top'>
            <div className='found_total'>найдено {totalFound}</div>
            <div className='offers_sort'>
                <div className='sort_by'>
                    <label>сортировать по:</label>
                    <CustomSelectTag setSort={props.setSort}
                                     offersData={props.offersData}
                                     setOffersData={props.s}/>
                </div>
                <div className='show_partition'>
                    <label>показывать по:</label>
                    <ShowPartition items={['5', '10', '15']}/>
                </div>
            </div>
        </div>
    )
}
