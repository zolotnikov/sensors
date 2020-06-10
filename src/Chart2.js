import React, { useEffect, useState } from "react";
import "./App.css";
import Expand from "./Icons";

import {
    VictoryChart,
    VictoryLine,
    VictoryAxis,
    createContainer,
    VictoryLabel,
    LineSegment
} from "victory";

function Chart2(props) {
    let formatter = new Intl.DateTimeFormat("ru", {
        month: "short",
        day: "numeric"
    });

    const VictoryCursorVoronoiContainer = createContainer("cursor", "zoom");
    const [isHover, setHover] = useState(false);
    const [fullWidth, setFullWidth] = useState((window.innerWidth - 570) / 2);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setFullWidth((window.innerWidth - 570) / 2);
        });
    }, [window]);

    const strokeDasharray = "2, 5";

    return (
        <div
            style={{ cursor: "ew-resize" }}
            className="oneChart"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="chartHeader">
                <div className="titleButton">
                    <div className="title">{props.name}</div>
                </div>
                {isHover ? (
                    <div className="button">
                        <Expand /> <a href="./fullchart">Открыть</a>
                    </div>
                ) : (
                    <div className="values6">
                        <div className="labelValue">
                            <div className="label">20см</div>
                            <div
                                className="value"
                                style={{ color: props.color2 }}
                            >
                                {Math.round(
                                    props.data2[props.data1.length - 1].y
                                )}
                                {props.unit}
                            </div>
                        </div>
                        <div className="labelValue">
                            <div className="label">5см</div>
                            <div
                                className="value"
                                style={{ color: props.color1 }}
                            >
                                {Math.round(
                                    props.data1[props.data1.length - 1].y
                                )}
                                {props.unit}
                            </div>
                        </div>
                    </div>
                )}

                {/* <div className="button">
                    <Expand /> <a href="./fullchart">Открыть</a>
                </div> */}

                {/* <div className="values">
                    <div className="labelValue">
                        <div className="label">5см</div>
                        <div className="value1">
                            {Math.round(value1)}
                            {props.unit}
                        </div>
                    </div>
                </div> */}
            </div>
            <div
                className="chartBG"
                style={{ width: fullWidth, height: "140px" }}
            >
                <VictoryChart
                    height={160}
                    width={fullWidth}
                    containerComponent={
                        <VictoryCursorVoronoiContainer
                            zoomDimension="x"
                            cursorDimension="x"
                            voronoiDimension="x"
                            mouseFollowTooltips
                            cursorComponent={
                                <LineSegment
                                    style={{
                                        stroke: "#007AFF",
                                        strokeWidth: 5,
                                        strokeLinecap: "round",
                                        opacity: 0.5
                                    }}
                                />
                            }
                        />
                    }
                    minDomain={{
                        y: props.minYDomain,
                        x: new Date(props.minXDomain)
                    }}
                    padding={{ top: 10, bottom: 22, left: 0, right: 0 }}
                >
                    <VictoryAxis
                        tickFormat={t => `${formatter.format(new Date(t))}`}
                        style={{
                            axis: { stroke: "none" },
                            grid: {
                                stroke: "#D5DBDF",
                                strokeDasharray
                            },
                            ticks: { stroke: "#D5DBDF", size: 5 },
                            tickLabels: {
                                fontSize: 13,
                                padding: 5,
                                fontFamily: "Graphik LC",
                                color: "#222"
                            }
                        }}
                    />
                    <VictoryAxis
                        tickLabelComponent={
                            <VictoryLabel dx={20} textAnchor="start" />
                        }
                        dependentAxis
                        style={{
                            axis: { stroke: "none" },
                            grid: {
                                stroke: "#D5DBDF",
                                strokeDasharray
                            },
                            ticks: { stroke: "#D5DBDF", size: 5 },
                            tickLabels: {
                                fontSize: 13,
                                padding: 5,
                                fontFamily: "Graphik LC",
                                color: "#222"
                            }
                        }}
                    />

                    <VictoryLine
                        interpolation="linear"
                        padding={10}
                        style={{
                            data: { stroke: props.color2 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={props.data2}
                    />
                    <VictoryLine
                        interpolation="linear"
                        padding={10}
                        style={{
                            data: { stroke: props.color1 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={props.data1}
                    />
                </VictoryChart>
            </div>
        </div>
    );
}

export default Chart2;
