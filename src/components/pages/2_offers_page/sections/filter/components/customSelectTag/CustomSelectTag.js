import './css/customselect.css';

export default function CustomSelectTag(props) {

    async function clickHandle(e) {
        let chosenValue = e.target.value;
        props.setSort(chosenValue);
    }

    return (
        <select className='custom-select' onChange={clickHandle}>
            <option value='time'>времени</option>
            <option value='cost'>стоимости</option>
            <option value='duration'>длительности</option>
        </select>
    )
}
