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
                            <div className="wagon-number"><span className="number">01</span><span
                                className="text">вагон</span></div>
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
                                    <td className="wagon-seat-info">Верхние<span>10</span></td>
                                    <td className="wagon-seat-price">1959
                                        <img src="/images/icon-value.png" alt="icon price" width="14" height="17"/>
                                    </td>
                                    <td className="features-icons-list">
                                        <ul>
                                            <li className="icon wi-fi tooltip"></li>
                                            <li className="icon conditioning selected tooltip"></li>
                                            <li className="icon linens selected tooltip"></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="wagon-seat-info">Нижние<span>11</span></td>
                                    <td className="wagon-seat-price">2730
                                        <img src="/images/icon-value.png" alt="icon price" width="14" height="17"/>
                                    </td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="random-peoples-watch"><span>19</span> человек выбирают места в этом поезде</div>
                        <div className="wagon-picture">
                            <div className="railway second">
                                <div className="railway-number">1</div>
                                <div className="railway-cover">
                                    <div className="railway-seats-list top-row">
                                        <div className="railway-seats-block">
                                            <div className="railway-seat available " aria-hidden="true">1</div>
                                            <div className="railway-seat available " aria-hidden="true">2</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat available " aria-hidden="true">3</div>
                                            <div className="railway-seat available " aria-hidden="true">4</div>
                                            <div className="railway-seat available " aria-hidden="true">5</div>
                                            <div className="railway-seat available " aria-hidden="true">6</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat available " aria-hidden="true">7</div>
                                            <div className="railway-seat available " aria-hidden="true">8</div>
                                            <div className="railway-seat available " aria-hidden="true">9</div>
                                            <div className="railway-seat available " aria-hidden="true">10</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat available " aria-hidden="true">11</div>
                                            <div className="railway-seat available " aria-hidden="true">12</div>
                                            <div className="railway-seat available " aria-hidden="true">13</div>
                                            <div className="railway-seat available " aria-hidden="true">14</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat available " aria-hidden="true">15</div>
                                            <div className="railway-seat available " aria-hidden="true">16</div>
                                            <div className="railway-seat available " aria-hidden="true">17</div>
                                            <div className="railway-seat available " aria-hidden="true">18</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat available " aria-hidden="true">19</div>
                                            <div className="railway-seat available " aria-hidden="true">20</div>
                                            <div className="railway-seat  " aria-hidden="true">21</div>
                                            <div className="railway-seat  " aria-hidden="true">22</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat  " aria-hidden="true">23</div>
                                            <div className="railway-seat  " aria-hidden="true">24</div>
                                            <div className="railway-seat  " aria-hidden="true">25</div>
                                            <div className="railway-seat  " aria-hidden="true">26</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat  " aria-hidden="true">27</div>
                                            <div className="railway-seat  " aria-hidden="true">28</div>
                                            <div className="railway-seat  " aria-hidden="true">29</div>
                                            <div className="railway-seat  " aria-hidden="true">30</div>
                                        </div>
                                        <div className="railway-seats-block">
                                            <div className="railway-seat  " aria-hidden="true">31</div>
                                            <div className="railway-seat  " aria-hidden="true">32</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </main>
        </section>
);

}
