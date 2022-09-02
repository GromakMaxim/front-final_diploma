import './css/customselect.css';

export default function CustomSelectTag(props) {

    async function clickHandle(e) {
        let chosenValue = e.target.value;
        props.sort(chosenValue);
    }

    //wtf? api не понимает sort=price, зато понимает sort=cost
    return (
        <select className='custom-select' onChange={clickHandle}>
            <option value='date'>времени</option>
            <option value='cost'>стоимости</option>
            <option value='duration'>длительности</option>
        </select>
    )
}
