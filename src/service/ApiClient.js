export default class ApiClient {
    constructor() {
        this._apiBase = 'https://fe-diplom.herokuapp.com';

    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        return await res.json();
    }


    async getCityId(value) {
        let result = await this.getResource(`/routes/cities?name=${value}`);
        return result[0]._id;
    }

    getLastRoutes() {
        return this.getResource('/routes/last');
    }

    async getRoutes(body) {
        console.log(body);

        let fromId;
        let toId;
        if (body.from_city_id === null || body.from_city_id === undefined){
            fromId = await this.getCityId(body.fromCity);
            toId = await this.getCityId(body.toCity);
        }

        const stateForSubmit = {
            from_city_id: fromId,
            to_city_id: toId,
            date_start: body.startDate ? body.startDate : '',
            date_end: body.endDate ? body.endDate : '',
        }

        let bodyString = [];

        for (let key in stateForSubmit) {

            if (stateForSubmit[key]) {
                if (key === 'from_city_id') {
                    bodyString.push(`${[key]}=${stateForSubmit[key]}`);
                } else {
                    bodyString.push(`&${[key]}=${stateForSubmit[key]}`);
                }
            }
        }
        let endpoint = `/routes/?${bodyString.join('')}`;
        console.log('endpoint: ' + endpoint);

        let result = await this.getResource(endpoint);
        console.log(result);
        return result;

    }

    async getSeats(id) {
        let result = await this.getResource('/routes/' + id + '/seats')
        return result;
    }

    async postOrder(id, seats, user) {
        const res = await fetch(`${this._apiBase}/order`, {
            method: 'POST',
            body: JSON.stringify({
                user: user,
                departure: {
                    route_direction_id: id,
                    seats: seats
                }
            })
        })

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        return await res.json();
    }
}
