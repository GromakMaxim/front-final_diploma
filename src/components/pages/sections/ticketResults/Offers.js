import Offer from "./offer/Offer";
import React from "react";

export default function Offers(props) {
    let data = [
        {
            "total_count": 67,
            "items": [
                {
                    "have_first_class": false,
                    "have_second_class": false,
                    "have_third_class": false,
                    "have_fourth_class": false,
                    "have_wifi": false,
                    "have_air_conditioning": false,
                    "is_express": false,
                    "min_price": 575,
                    "available_seats": 93,
                    "available_seats_info": {
                        "second": 32,
                        "fourth": 62
                    },
                    "departure": {
                        "_id": 5176,
                        "have_first_class": false,
                        "have_second_class": true,
                        "have_third_class": false,
                        "have_fourth_class": true,
                        "have_wifi": true,
                        "have_air_conditioning": true,
                        "is_express": false,
                        "min_price": 575,
                        "duration": 136140,
                        "available_seats": 93,
                        "available_seats_info": {
                            "second": 32,
                            "fourth": 62
                        },
                        "train": {
                            "_id": 1085,
                            "name": "Зевс - 65"
                        },
                        "from": {
                            "railway_station_name": "Архангельск",
                            "city": {
                                "_id": 1498,
                                "name": "архангельск"
                            },
                            "datetime": 1616793445
                        },
                        "to": {
                            "railway_station_name": "Ладожский",
                            "city": {
                                "_id": 1492,
                                "name": "санкт-петербург"
                            },
                            "datetime": 1616929585
                        },
                        "price_info": {
                            "second": {
                                "top_price": 1632,
                                "bottom_price": 2508
                            },
                            "fourth": {
                                "top_price": 575,
                                "bottom_price": 668
                            }
                        }
                    }
                },
                {
                    "have_first_class": false,
                    "have_second_class": false,
                    "have_third_class": false,
                    "have_fourth_class": false,
                    "have_wifi": false,
                    "have_air_conditioning": false,
                    "is_express": false,
                    "min_price": 771,
                    "available_seats": 141,
                    "available_seats_info": {
                        "first": 18,
                        "fourth": 124
                    },
                    "departure": {
                        "_id": 7504,
                        "have_first_class": true,
                        "have_second_class": false,
                        "have_third_class": false,
                        "have_fourth_class": true,
                        "have_wifi": true,
                        "have_air_conditioning": true,
                        "is_express": false,
                        "min_price": 771,
                        "duration": 281760,
                        "available_seats": 141,
                        "available_seats_info": {
                            "first": 18,
                            "fourth": 124
                        },
                        "train": {
                            "_id": 1182,
                            "name": "Перун - 67"
                        },
                        "from": {
                            "railway_station_name": "Архангельск",
                            "city": {
                                "_id": 1498,
                                "name": "архангельск"
                            },
                            "datetime": 1617001737
                        },
                        "to": {
                            "railway_station_name": "Ладожский",
                            "city": {
                                "_id": 1492,
                                "name": "санкт-петербург"
                            },
                            "datetime": 1617283497
                        },
                        "price_info": {
                            "first": {
                                "price": 2520,
                                "top_price": 4695,
                                "bottom_price": 4120
                            },
                            "fourth": {
                                "top_price": 771,
                                "bottom_price": 796
                            }
                        }
                    }
                },
                {
                    "have_first_class": false,
                    "have_second_class": false,
                    "have_third_class": false,
                    "have_fourth_class": false,
                    "have_wifi": false,
                    "have_air_conditioning": false,
                    "is_express": false,
                    "min_price": 608,
                    "available_seats": 141,
                    "available_seats_info": {
                        "second": 32,
                        "third": 48,
                        "fourth": 62
                    },
                    "departure": {
                        "_id": 8739,
                        "have_first_class": false,
                        "have_second_class": true,
                        "have_third_class": true,
                        "have_fourth_class": true,
                        "have_wifi": true,
                        "have_air_conditioning": true,
                        "is_express": false,
                        "min_price": 608,
                        "duration": 186540,
                        "available_seats": 141,
                        "available_seats_info": {
                            "second": 32,
                            "third": 48,
                            "fourth": 62
                        },
                        "train": {
                            "_id": 1443,
                            "name": "Иволга - 83"
                        },
                        "from": {
                            "railway_station_name": "Архангельск",
                            "city": {
                                "_id": 1498,
                                "name": "архангельск"
                            },
                            "datetime": 1617009554
                        },
                        "to": {
                            "railway_station_name": "Ладожский",
                            "city": {
                                "_id": 1492,
                                "name": "санкт-петербург"
                            },
                            "datetime": 1617196094
                        },
                        "price_info": {
                            "second": {
                                "top_price": 2625,
                                "bottom_price": 2403
                            },
                            "third": {
                                "top_price": 4035,
                                "bottom_price": 4530,
                                "side_price": 3345
                            },
                            "fourth": {
                                "top_price": 982,
                                "bottom_price": 608
                            }
                        }
                    }
                },
                {
                    "have_first_class": false,
                    "have_second_class": false,
                    "have_third_class": false,
                    "have_fourth_class": false,
                    "have_wifi": false,
                    "have_air_conditioning": false,
                    "is_express": false,
                    "min_price": 2142,
                    "available_seats": 67,
                    "available_seats_info": {
                        "first": 36,
                        "second": 32
                    },
                    "departure": {
                        "_id": 9582,
                        "have_first_class": true,
                        "have_second_class": true,
                        "have_third_class": false,
                        "have_fourth_class": false,
                        "have_wifi": true,
                        "have_air_conditioning": false,
                        "is_express": false,
                        "min_price": 2142,
                        "duration": 301860,
                        "available_seats": 67,
                        "available_seats_info": {
                            "first": 36,
                            "second": 32
                        },
                        "train": {
                            "_id": 1260,
                            "name": "Зевс - 43"
                        },
                        "from": {
                            "railway_station_name": "Архангельск",
                            "city": {
                                "_id": 1498,
                                "name": "архангельск"
                            },
                            "datetime": 1617039086
                        },
                        "to": {
                            "railway_station_name": "Ладожский",
                            "city": {
                                "_id": 1492,
                                "name": "санкт-петербург"
                            },
                            "datetime": 1617340946
                        },
                        "price_info": {
                            "first": {
                                "price": 3330,
                                "top_price": 2985,
                                "bottom_price": 4080
                            },
                            "second": {
                                "top_price": 2142,
                                "bottom_price": 2241
                            }
                        }
                    }
                },
                {
                    "have_first_class": false,
                    "have_second_class": false,
                    "have_third_class": false,
                    "have_fourth_class": false,
                    "have_wifi": false,
                    "have_air_conditioning": false,
                    "is_express": false,
                    "min_price": 2580,
                    "available_seats": 141,
                    "available_seats_info": {
                        "first": 18,
                        "second": 32,
                        "third": 96
                    },
                    "departure": {
                        "_id": 7993,
                        "have_first_class": true,
                        "have_second_class": true,
                        "have_third_class": true,
                        "have_fourth_class": false,
                        "have_wifi": true,
                        "have_air_conditioning": true,
                        "is_express": false,
                        "min_price": 2580,
                        "duration": 185220,
                        "available_seats": 141,
                        "available_seats_info": {
                            "first": 18,
                            "second": 32,
                            "third": 96
                        },
                        "train": {
                            "_id": 1088,
                            "name": "Транзит - 42"
                        },
                        "from": {
                            "railway_station_name": "Архангельск",
                            "city": {
                                "_id": 1498,
                                "name": "архангельск"
                            },
                            "datetime": 1617108245
                        },
                        "to": {
                            "railway_station_name": "Ладожский",
                            "city": {
                                "_id": 1492,
                                "name": "санкт-петербург"
                            },
                            "datetime": 1617293465
                        },
                        "price_info": {
                            "first": {
                                "price": 3350,
                                "top_price": 4840,
                                "bottom_price": 4075
                            },
                            "second": {
                                "top_price": 2925,
                                "bottom_price": 2658
                            },
                            "third": {
                                "top_price": 2580,
                                "bottom_price": 3550,
                                "side_price": 4565
                            }
                        }
                    }
                }
            ]
        }
    ]

    let offers = [];
    data[0].items.forEach(item => {
        offers.push(<Offer key={item.departure._id} data={item} goTo={props.goTo}/>);
    })

    return (
        <div className='offers-list'>
            {offers}
        </div>
    );
}
