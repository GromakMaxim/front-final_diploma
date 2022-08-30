import FilterWrapper from "../filter/FilterWrapper";

/**
 * изменяющаяся секция под прогрессбаром
 */
export default function MiddleSection(props) {
    return (<div className='ticket-results'>
        <FilterWrapper/>
        {props.children}
    </div>)
}
