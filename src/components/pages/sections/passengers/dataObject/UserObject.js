/**
 * data object, данные пользователя
 */

export default class UserObject {

    constructor() {
        /**
         * имя
         */
        this.firstname = null;

        /**
         * фамилия
         */
        this.lastname = null;

        /**
         * отчество
         */
        this.patronymic = null;

        /**
         * взрослый/детский
         */
        this.type = null;

        /**
         * пол: м/ж
         */
        this.gender = null;

        /**
         * дата рождения
         */
        this.birthdate = null;

        /**
         * ограниченная подвижность
         */
        this.limitedMobility = null;

        this.document = null;
    }
}
