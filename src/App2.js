import React, { useState } from "react";
import "./App.css";
import * as data from "./response.json";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {
    VictoryChart,
    VictoryZoomContainer,
    VictoryLine,
    VictoryAxis,
    VictoryBrushContainer
} from "victory";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleZoom(domain) {
        this.setState({ selectedDomain: domain });
    }

    handleBrush(domain) {
        this.setState({ zoomDomain: domain });
        console.log(this.state.zoomDomain);
    }

    render() {
        const formatedData = data.default.map(atr => {
            return { x: new Date(atr.datetime), y: atr.air_temp / 10 };
        });

        return (
            <div>
                <VictoryChart
                    width={360}
                    height={222}
                    scale={{ x: "time" }}
                    containerComponent={
                        <VictoryZoomContainer
                            responsive={false}
                            zoomDimension="x"
                            zoomDomain={this.state.zoomDomain}
                            onZoomDomainChange={this.handleZoom.bind(this)}
                        />
                    }
                >
                    <VictoryAxis />
                    <VictoryLine
                        padding={{ top: 0, bottom: 0 }}
                        style={{
                            data: { stroke: "tomato" }
                        }}
                        data={formatedData}
                    />
                </VictoryChart>

                <VictoryChart
                    width={743}
                    height={90}
                    scale={{ x: "time" }}
                    padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                    containerComponent={
                        <VictoryBrushContainer
                            responsive={false}
                            brushDimension="x"
                            brushDomain={this.state.selectedDomain}
                            onBrushDomainChange={this.handleBrush.bind(this)}
                        />
                    }
                >
                    <VictoryAxis
                    // tickValues={[
                    //     new Date(1985, 1, 1),
                    //     new Date(1990, 1, 1),
                    //     new Date(1995, 1, 1),
                    //     new Date(2000, 1, 1),
                    //     new Date(2005, 1, 1),
                    //     new Date(2010, 1, 1),
                    //     new Date(2015, 1, 1)
                    // ]}
                    // tickFormat={x => new Date(x).getFullYear()}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "tomato" }
                        }}
                        data={formatedData}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default App;
