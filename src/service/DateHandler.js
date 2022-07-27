export default class DateHandler {
    async dateParser(date) {
        console.log("!:" + date)
        let day;
        let month;

        if (date.getDate() < 10) {
            day = `0${date.getDate()}`;
        } else {
            day = date.getDate();
        }

        if (date.getMonth() + 1 < 10) {
            month = `0${date.getMonth() + 1}`;
        } else {
            month = date.getMonth() + 1;
        }

        let result = `${date.getFullYear()}-${month}-${day}`;

        return result;

    }
}
