import React, { useEffect, useState } from "react";
import "./App.css";

import {
    VictoryLine,
    VictoryAxis,
    VictoryChart,
    VictoryLabel,
    LineSegment,
    createContainer
} from "victory";

function Chart3(props) {
    let formatter = new Intl.DateTimeFormat("ru", {
        month: "short",
        day: "numeric"
    });

    const VictoryCursorVoronoiContainer = createContainer("cursor", "zoom");

    const [fullWidth, setFullWidth] = useState(window.innerWidth - 500);
    const [fullHeight, setFullHeight] = useState(window.innerHeight - 110);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setFullWidth(window.innerWidth - 500);
            setFullHeight(window.innerHeight - 110);
        });
    }, [window]);

    const strokeDasharray = "2, 5";

    return (
        <div
            style={{
                width: fullWidth,
                height: fullHeight,
                cursor: "ew-resize"
            }}
        >
            <VictoryChart
                minDomain={{
                    // y: 5,
                    x: new Date("2020-05-28T00:20:51")
                }}
                // maxDomain={{ y: 30 }}
                height={fullHeight}
                width={fullWidth}
                containerComponent={
                    <VictoryCursorVoronoiContainer
                        zoomDimension="x"
                        cursorDimension="x"
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
                padding={{ top: 10, bottom: 22, left: 20, right: 20 }}
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
                        data: { stroke: props.color1 }
                    }}
                    data={props.data1}
                />

                <VictoryLine
                    interpolation="linear"
                    padding={10}
                    style={{
                        data: { stroke: props.color2 }
                    }}
                    data={props.data2}
                />
                <VictoryLine
                    interpolation="linear"
                    padding={10}
                    style={{
                        data: { stroke: props.color3 }
                    }}
                    data={props.data3}
                />
                <VictoryLine
                    interpolation="linear"
                    padding={10}
                    style={{
                        data: { stroke: props.color4 }
                    }}
                    data={props.data4}
                />
            </VictoryChart>
        </div>
    );
}

export default Chart3;
