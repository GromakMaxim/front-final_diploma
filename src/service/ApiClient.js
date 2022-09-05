export default class ApiClient {
    constructor() {
        this._apiBase = 'https://fe-diplom.herokuapp.com';

    }

    async getResource(url) {
        let someUrl = `${this._apiBase}${url}`;
        console.log(someUrl);
        const res = await fetch(someUrl);

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
        if (body.from_city_id === null || body.from_city_id === undefined) {
            fromId = await this.getCityId(body.fromCity);
            toId = await this.getCityId(body.toCity);
        }

        const stateForSubmit = {
            from_city_id: fromId,
            to_city_id: toId,
            date_start: body.startDate ? body.startDate : '',
            date_end: body.endDate ? body.endDate : '',
            sort: body.sort ? body.sort : '',
            have_first_class: body.have_first_class ? body.have_first_class : '',
            have_second_class: body.have_second_class ? body.have_second_class : '',
            have_third_class: body.have_third_class ? body.have_third_class : '',
            have_fourth_class: body.have_fourth_class ? body.have_fourth_class : '',

            have_wifi: body.have_wifi ? body.have_wifi : '',
            have_express: body.have_express ? body.have_express : '',
            have_air_conditioning: body.have_air_conditioning ? body.have_air_conditioning : '',

            price_from: body.price_from ? body.price_from : '',
            price_to: body.price_to ? body.price_to : '',
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
