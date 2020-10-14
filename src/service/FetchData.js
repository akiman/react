export default class FetchData {

    // ссылка на API
    startUrl = 'https://api.spacexdata.com/v4/';

    // запрос к API
    getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    // запрос на получение ракет
    getRocket = async () => await this.getResource(this.startUrl + 'rockets');

    // запрос на получение ракет
    getLaunches = async () => await this.getResource(this.startUrl + 'launches/past');

    // запрос на получение компаний
    getCompany = async () => await this.getResource(this.startUrl + 'company');
};