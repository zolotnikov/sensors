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

function Chart4(props) {
    let formatter = new Intl.DateTimeFormat("ru", {
        month: "short",
        day: "numeric"
    });

    const VictoryCursorVoronoiContainer = createContainer(
        "cursor",
        // "voronoi",
        "zoom"
    );

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
                            <div className="label">80см</div>
                            <div
                                className="value"
                                style={{ color: props.color6 }}
                            >
                                {props.data5[props.data6.length - 1].y > 0
                                    ? Math.round(
                                          props.data5[props.data6.length - 1].y
                                      )
                                    : 0}
                                {props.unit}
                            </div>
                        </div>
                        <div className="labelValue">
                            <div className="label">65см</div>
                            <div
                                className="value"
                                style={{ color: props.color5 }}
                            >
                                {props.data4[props.data6.length - 1].y > 0
                                    ? Math.round(
                                          props.data4[props.data4.length - 1].y
                                      )
                                    : 0}
                                {props.unit}
                            </div>
                        </div>
                        <div className="labelValue">
                            <div className="label">50см</div>
                            <div
                                className="value"
                                style={{ color: props.color4 }}
                            >
                                {props.data3[props.data6.length - 1].y > 0
                                    ? Math.round(
                                          props.data3[props.data4.length - 1].y
                                      )
                                    : 0}
                                {props.unit}
                            </div>
                        </div>
                        <div className="labelValue">
                            <div className="label">35см</div>
                            <div
                                className="value"
                                style={{ color: props.color3 }}
                            >
                                {props.data2[props.data6.length - 1].y > 0
                                    ? Math.round(
                                          props.data2[props.data3.length - 1].y
                                      )
                                    : 0}
                                {props.unit}
                            </div>
                        </div>
                        <div className="labelValue">
                            <div className="label">20см</div>
                            <div
                                className="value"
                                style={{ color: props.color2 }}
                            >
                                {props.data1[props.data6.length - 1].y > 0
                                    ? Math.round(
                                          props.data2[props.data2.length - 1].y
                                      )
                                    : 0}
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
                        // tickCount={3}
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
                            data: { stroke: props.color6 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={props.data6}
                    />
                    <VictoryLine
                        interpolation="linear"
                        padding={10}
                        style={{
                            data: { stroke: props.color5 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={props.data5}
                    />
                    <VictoryLine
                        interpolation="linear"
                        padding={10}
                        style={{
                            data: { stroke: props.color4 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={props.data4}
                    />
                    <VictoryLine
                        interpolation="linear"
                        padding={10}
                        style={{
                            data: { stroke: props.color3 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={props.data3}
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

export default Chart4;
