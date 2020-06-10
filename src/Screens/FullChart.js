import React, { useEffect } from "react";
import "../App.css";
import * as rawData from "../response.json";
import Chart3 from "../Chart3";
import { Calendar, ArrowLeft, Menu } from "../Icons";

function FullChart() {
    const data = rawData.default.filter(
        x => new Date(x.datetime) >= new Date("2020-05-28T00:20:51")
    );

    useEffect(() => {
        console.log(air_temp);
    });

    const air_temp = data.map(atr => {
        return { x: new Date(atr.datetime), y: atr.air_temp / 10 };
    });

    const moisture = data.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture
        };
    });

    const moisture_secondary = data.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture_secondary
        };
    });

    const air_moisture = data.map(atr => {
        return { x: new Date(atr.datetime), y: atr.air_moisture };
    });

    return (
        <div className="conteiner">
            <div className="mainNavigation"></div>
            <div className="secondNavigation">
                <div className="navHeader">
                    <a href="./">
                        <Menu />
                    </a>
                    Датчики
                </div>
                <div className="navBody">
                    {/* <div class="form-group">
                        <div class="form-group">
                            <label data-legend="color-1" class="form-checkbox">
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Температура воздуха
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label data-legend="color-2" class="form-checkbox">
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Влажность воздуха
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label
                                data-legend="color-3.1"
                                class="form-checkbox"
                            >
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Температура почвы 5см
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label
                                data-legend="color-3.2"
                                class="form-checkbox"
                            >
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Температура почвы 20см
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label
                                data-legend="color-4.1"
                                class="form-checkbox"
                            >
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Влажность почвы 5см
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label
                                data-legend="color-4.2"
                                class="form-checkbox"
                            >
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Влажность почвы 20см
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label data-legend="color-5" class="form-checkbox">
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Освещенность
                                </span>
                            </label>
                        </div>
                        <div class="form-group">
                            <label data-legend="color-6" class="form-checkbox">
                                <input
                                    class="form-checkbox__chk"
                                    type="checkbox"
                                    defaultChecked={true}
                                />
                                <span class="form-checkbox__el"></span>
                                <span class="form-checkbox__value">
                                    Заряд батареи
                                </span>
                            </label>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="fullChart">
                <div className="fullChartHeader">
                    <div className="back">
                        <a href="./">
                            <ArrowLeft />
                        </a>
                    </div>
                    <div className="time">
                        <div class="segmentContlorBody">
                            <div class="segmentConrolItem">
                                <button
                                    class="segmentConrolInnerItem"
                                    type="button"
                                >
                                    24 часа
                                </button>
                            </div>
                            <div class="segmentConrolItem">
                                <button
                                    class="segmentConrolInnerItem"
                                    type="button"
                                >
                                    2 дня
                                </button>
                            </div>
                            <div class="segmentConrolItem">
                                <button
                                    class="segmentConrolInnerItemActive"
                                    type="button"
                                >
                                    7 дней
                                </button>
                            </div>
                            <div class="segmentConrolItem">
                                <button
                                    class="segmentConrolInnerItem"
                                    type="button"
                                >
                                    30 дней
                                </button>
                            </div>
                        </div>
                        <div
                            class="form-group"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "auto auto auto",
                                gridGap: 3,
                                alignItems: "center",
                                marginBottom: 0
                            }}
                        >
                            <div class="form-select">
                                <div class="form-select__ico">
                                    <Calendar />
                                </div>
                                <div class="form-select__value">
                                    19 сент 2020
                                </div>
                            </div>
                            —
                            <div class="form-select">
                                <div class="form-select__ico">
                                    <Calendar />
                                </div>
                                <div class="form-select__value">
                                    26 сент 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Chart3
                    data1={air_temp}
                    color1="#27ae60"
                    data2={moisture}
                    color2="#FF3B30"
                    data3={moisture_secondary}
                    color3="#007AFF"
                    data4={air_moisture}
                    color4="#F4D359"
                />
            </div>
        </div>
    );
}

export default FullChart;
