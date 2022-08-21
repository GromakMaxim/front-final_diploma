export default class Passport {

    constructor() {
        this._series = null;
        this._number = null;
    }


    set setSeries(value) {
        this._series = value;
    }

    get getSeries() {
        return this._series;
    }

    set setNumber(value) {
        this._number = value;
    }

    get getNumber() {
        return this._number;
    }

}
