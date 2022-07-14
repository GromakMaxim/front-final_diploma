import WagonPicture from "./WagonPicture";

export default function WagonInfo(props) {
    return (
        <section className="seat-selection-wagons-info">
            <header>
                <div className="wagons-sort"><h4>Вагоны</h4>
                    <ul className="wagons-sort-list">
                        <li className="selected" aria-hidden="true">01</li>
                        <li className="" aria-hidden="true">02</li>
                    </ul>
                </div>
                <div>Нумерация вагонов начинается с головы поезда</div>
            </header>
            <main>
                <ul className="wagons-list">
                    <li className="wagons-list-item">
                        <div className="wagon-main-info">
                            <div className="wagon-number">
                                <span className="wagon-number-1">01</span>
                                <span className="wagon-number-2">вагон</span>
                            </div>
                            <table className="wagon-info-table">
                                <thead>
                                <tr className="wagon-info-table-titles">
                                    <td>Места<span></span></td>
                                    <td>Стоимость</td>
                                    <td>Обслуживание ФПК</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="wagon-seat-info">Верхние
                                        <span>10</span>
                                    </td>
                                    <td className="wagon-seat-price">1959
                                        <img src="/images/icon-value.png" alt="icon price" width="14" height="17"/>
                                    </td>
                                    <td className="features-icons-list">
                                        <ul>
                                            <li className="icon wi-fi tooltip"/>
                                            <li className="icon conditioning selected tooltip"/>
                                            <li className="icon linens selected tooltip"/>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="wagon-seat-info">Нижние
                                        <span>11</span>
                                    </td>
                                    <td className="wagon-seat-price">2730
                                        <img src="/images/icon-value.png" alt="icon price" width="14" height="17"/>
                                    </td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="random-peoples-watch">
                            <span>19</span>
                            человек выбирают места в этом поезде
                        </div>
                        <WagonPicture/>
                    </li>
                </ul>
            </main>
        </section>
    );

}
