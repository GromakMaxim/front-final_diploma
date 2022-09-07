import cloneFunc from "../../../service/CloneFunc";
import StorageService from "../../../service/StorageService";
import ApiClient from "../../../service/ApiClient";

export default function SearchRoutesButton(props) {
    let storageHandler = new StorageService();
    let apiClient = new ApiClient();

    async function clickHandle() {
        let temp;

        let begin = props.startDate;
        let end = props.endDate;

        if (begin.includes('undef')) begin = '';
        if (end.includes('undef')) end = '';


        let findThis = {
            fromCity: props.fromCity,
            toCity: props.toCity,
            startDate: begin,
            endDate: end,
            limit: '5', // отображать по 5 направлений
            offset: '0', // смещение
            pagination: '1' // страница пагинации
        }

        storageHandler.put('fromCity', props.fromCity);
        storageHandler.put('toCity', props.toCity);

        let routes = await apiClient.getRoutes(findThis);
        temp = props.state;
        if (routes.error || routes.total_count === 0){
            temp.error = {
                type: 'err',
                mainText: 'По выбранному направлению билетов нет',
                secondaryText: 'Попробуйте выбрать другое направление.',
            }
        } else {
            temp.display = 'routes';
            temp.routes = routes;
            temp.filter = findThis;
        }

        let newState = await cloneFunc(temp);
        props.setState(newState);

    }

    return <button className="search-btn" onClick={clickHandle}>Найти билет</button>;
}
