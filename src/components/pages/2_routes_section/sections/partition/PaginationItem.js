/**
 * pagination element
 * (routes section)
 */
export default function PaginationItem(props){
    let classes = 'pagination_item';
    if (props.isActive){
        classes = 'pagination_item active';
    }

    let showThis = <div className={classes}>{props.number}</div>;
    return showThis;
}
