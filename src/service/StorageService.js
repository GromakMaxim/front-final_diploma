export default class StorageService {


    put(key, value) {
        localStorage.setItem(key, value);
    }

    get(key) {
        let result = localStorage.getItem(key);
        if (result === null || undefined) {
            return null;
        }
        return result;
    }
}
