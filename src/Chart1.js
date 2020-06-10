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

function Chart1(props) {
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
                    <div className="value" style={{ color: props.color1 }}>
                        {Math.round(props.data[props.data.length - 1].y)}
                        {props.unit}
                    </div>
                )}
            </div>
            <div
                className="chartBG"
                style={{ width: fullWidth, height: "140px" }}
            >
                <VictoryChart
                    minDomain={{
                        y: props.minDomain
                        // x: new Date(props.minXDomain)
                    }}
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
                        tickCount={3}
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
                            data: { stroke: "#27AE60" }
                        }}
                        data={props.data}
                    />
                </VictoryChart>
            </div>
        </div>
    );
}

export default Chart1;
