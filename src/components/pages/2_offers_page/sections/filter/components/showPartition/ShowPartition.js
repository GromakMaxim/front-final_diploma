import './css/style.css'
import {useState} from "react";

export default function ShowPartition(props) {
    const [selectedPartition, setPartition] = useState('5');

    function clickHandle(e) {
        console.log('partition:' + e.target.textContent);
        setPartition(e.target.textContent);
    }

    let arr = [];
    let classes = null;

    props.items.forEach(item => {
        if (selectedPartition === item) {
            classes = 'show_option active';
        } else {
            classes = 'show_option';
        }
        arr.push(<div className={classes} onClick={clickHandle}>{item}</div>);
    })

    return (
        <div className='show_options'>
            {arr}
        </div>
    )
}
