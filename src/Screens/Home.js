import React from "react";
import "../App.css";
import * as rawData from "../response.json";
import Chart1 from "../Chart1";
import Chart2 from "../Chart2";
import { Menu, Calendar } from "../Icons";

class Home extends React.Component {
    render() {
        const data = rawData.default.filter(
            x => new Date(x.datetime) >= new Date("2020-05-28T00:20:51")
        );

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

        const temp = data.map(atr => {
            return { x: new Date(atr.datetime), y: atr.temp / 10 };
        });
        const temp_secondary = data.map(atr => {
            return { x: new Date(atr.datetime), y: atr.temp_secondary / 10 };
        });
        const luminance = data.map(atr => {
            return { x: new Date(atr.datetime), y: atr.luminance };
        });
        const battery = data.map(atr => {
            return { x: new Date(atr.datetime), y: atr.battery };
        });

        return (
            <div className="conteiner">
                <div className="mainNavigation"></div>
                <div className="secondNavigation">
                    <div className="navHeader">
                        <Menu /> Датчики
                    </div>
                    <a href="./with6sensors">6 сенсоров</a>
                </div>
                <div className="charts">
                    <div className="chartsHeader">
                        <div className="bigTitle"> Sensor 3</div>
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
                    <Chart1
                        name={"Температура воздуха"}
                        data={air_temp}
                        color1="#27AE60"
                        unit="°"
                        minXDomain="2020-05-28T00:20:51"
                    />
                    <Chart1
                        name={"Влажность воздуха"}
                        data={air_moisture}
                        color1="#27AE60"
                        unit="%"
                        minXDomain="2020-05-28T00:20:51"
                    />
                    <Chart2
                        name={"Температура почвы"}
                        data1={temp}
                        data2={temp_secondary}
                        color1="#27AE60"
                        color2="#FF3B30"
                        unit="°"
                        minXDomain="2020-05-28T00:20:51"
                    />
                    <Chart2
                        name={"Влажность почвы"}
                        data1={moisture}
                        data2={moisture_secondary}
                        color1="#27AE60"
                        color2="#FF3B30"
                        unit="%"
                        minYDomain={0}
                        minXDomain="2020-05-28T00:20:51"
                    />
                    <Chart1
                        name={"Освещенность"}
                        data={luminance}
                        color1="#27AE60"
                        unit=" лк"
                        minXDomain="2020-05-28T00:20:51"
                    />
                    <Chart1
                        name={"Заряд батареи"}
                        data={battery}
                        color1="#27AE60"
                        unit=""
                        minXDomain="2020-05-28T00:20:51"
                    />
                </div>
            </div>
        );
    }
}

export default Home;
