import './css/customselect.css';

export default function CustomSelectTag(props){
    return (
        <select className='custom-select'>
            <option value='time'>времени</option>
            <option value='cost'>стоимости</option>
            <option value='duration'>длительности</option>
        </select>
    )
}
