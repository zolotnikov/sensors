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
                <div className="navBody"></div>
            </div>
            <div className="fullChart">
                <div className="fullChartHeader">
                    <div className="back">
                        <a href="./">
                            <ArrowLeft />
                        </a>
                    </div>
                    <div className="time">
                        <div className="segmentContlorBody">
                            <div className="segmentConrolItem">
                                <button
                                    className="segmentConrolInnerItem"
                                    type="button"
                                >
                                    24 часа
                                </button>
                            </div>
                            <div className="segmentConrolItem">
                                <button
                                    className="segmentConrolInnerItem"
                                    type="button"
                                >
                                    2 дня
                                </button>
                            </div>
                            <div className="segmentConrolItem">
                                <button
                                    className="segmentConrolInnerItemActive"
                                    type="button"
                                >
                                    7 дней
                                </button>
                            </div>
                            <div className="segmentConrolItem">
                                <button
                                    className="segmentConrolInnerItem"
                                    type="button"
                                >
                                    30 дней
                                </button>
                            </div>
                        </div>
                        <div
                            className="form-group"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "auto auto auto",
                                gridGap: 3,
                                alignItems: "center",
                                marginBottom: 0
                            }}
                        >
                            <div className="form-select">
                                <div className="form-select__ico">
                                    <Calendar />
                                </div>
                                <div className="form-select__value">
                                    19 сент 2020
                                </div>
                            </div>
                            —
                            <div className="form-select">
                                <div className="form-select__ico">
                                    <Calendar />
                                </div>
                                <div className="form-select__value">
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
