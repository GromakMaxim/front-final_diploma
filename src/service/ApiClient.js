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
        // console.log(body);

        let bodyString = [];

        for (let key in body) {

            if (body[key]) {
                if (key == 'from_city_id') {
                    bodyString.push(`${[key]}=${body[key]}`);
                } else {
                    bodyString.push(`&${[key]}=${body[key]}`);
                }
            }
        }

        return this.getResource(`/routes/?${bodyString.join('')}`);

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
