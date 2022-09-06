import './css/style.css'
import {useState} from "react";
import ApiClient from "../../../../../../../service/ApiClient";
import cloneFunc from "../../../../../../../service/CloneFunc";

export default function ShowPartition(props) {
    const [selectedPartition, setPartition] = useState('5');

    let apiClient = new ApiClient();

    async function clickHandle(e) {
        console.log('partition:' + e.target.textContent);
        setPartition(e.target.textContent);

        let partitionFilter = props.state.filter;
        partitionFilter.limit = e.target.textContent;

        let routes = await apiClient.getRoutes(partitionFilter);
        let temp = props.state;
        temp.routes = routes;
        temp.filter = partitionFilter;

        let newState = await cloneFunc(temp);
        props.setState(newState);
    }

    let arr = [];
    let classes = null;

    props.items.forEach(item => {
        if (selectedPartition === item) {
            classes = 'show_option active';
        } else {
            classes = 'show_option';
        }
        arr.push(<div key={arr.length} className={classes} onClick={clickHandle}>{item}</div>);
    })

    return (
        <div className='show_options'>
            {arr}
        </div>
    )
}
