import React, { useEffect, useState } from "react";
import "../App.css";
import * as data from "../response6.json";
import Chart1 from "../Chart1";
import Chart4 from "../Chart4";
import { Menu, Calendar } from "../Icons";

function With6sensors() {
    const air_temp = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.air_temp[0][0] / 10 };
    });

    const moisture1 = data.default.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture[0][0]
        };
    });
    const moisture2 = data.default.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture[0][1]
        };
    });
    const moisture3 = data.default.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture[1][0]
        };
    });
    const moisture4 = data.default.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture[1][1]
        };
    });
    const moisture5 = data.default.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture[2][0]
        };
    });
    const moisture6 = data.default.map(atr => {
        return {
            x: new Date(atr.datetime),
            y: atr.moisture[2][1]
        };
    });

    const air_moisture = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.air_moisture[0][0] };
    });

    const temp1 = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.temp[0][0] / 10 };
    });

    const temp2 = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.temp[0][1] / 10 };
    });

    const temp3 = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.temp[1][0] / 10 };
    });

    const temp4 = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.temp[1][1] / 10 };
    });

    const temp5 = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.temp[2][0] / 10 };
    });

    const temp6 = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.temp[2][1] / 10 };
    });

    const luminance = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.luminance };
    });
    const battery = data.default.map(atr => {
        return { x: new Date(atr.datetime), y: atr.battery };
    });

    const [fontSize, setFontSize] = useState((window.innerWidth - 500) / 55);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setFontSize((window.innerWidth - 500) / 55);
        });
    }, [window]);

    return (
        <div className="conteiner">
            <div className="mainNavigation"></div>
            <div className="secondNavigation">
                <div className="navHeader">
                    <Menu /> Датчики
                </div>
            </div>
            <div className="charts">
                <div className="chartsHeader">
                    <div className="bigTitle"> Sensor 3</div>
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
                <Chart1
                    fontSize={fontSize}
                    name={"Температура воздуха"}
                    data={air_temp}
                    color1="#27AE60"
                    unit="°"
                    minXDomain="2020-06-02T12:42:54"
                />
                <Chart1
                    fontSize={fontSize}
                    name={"Влажность воздуха"}
                    data={air_moisture}
                    color1="#27AE60"
                    unit="%"
                    minXDomain="2020-06-02T12:42:54"
                />
                <Chart4
                    fontSize={fontSize}
                    name={"Температура почвы"}
                    data1={temp1}
                    data2={temp2}
                    data3={temp3}
                    data4={temp4}
                    data5={temp5}
                    data6={temp6}
                    color1="#27AE60"
                    color2="#6337FF"
                    color3="#007AFF"
                    color4="#F4D359"
                    color5="#FF4FE9"
                    color6="#FF3B30"
                    unit="°"
                    minXDomain="2020-06-02T12:42:54"
                />
                <Chart4
                    fontSize={fontSize}
                    name={"Влажность почвы"}
                    data1={moisture1}
                    data2={moisture2}
                    data3={moisture3}
                    data4={moisture4}
                    data5={moisture5}
                    data6={moisture6}
                    color1="#27AE60"
                    color2="#6337FF"
                    color3="#007AFF"
                    color4="#F4D359"
                    color5="#FF4FE9"
                    color6="#FF3B30"
                    unit="%"
                    minYDomain={0}
                    minXDomain="2020-06-02T12:42:54"
                />
                <Chart1
                    fontSize={fontSize}
                    name={"Освещенность"}
                    data={luminance}
                    color1="#27AE60"
                    unit=" лк"
                    minXDomain="2020-06-02T12:42:54"
                />
                <Chart1
                    fontSize={fontSize}
                    name={"Заряд батареи"}
                    data={battery}
                    color1="#27AE60"
                    unit=""
                    minXDomain="2020-06-02T12:42:54"
                />
            </div>
        </div>
    );
}

export default With6sensors;
