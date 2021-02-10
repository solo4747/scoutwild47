import React from "react";
import {
  VictoryAnimation,
  VictoryPie,
  VictoryLabel,
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
} from "victory";
import "./index.css";
const dataA = [
  { x: "Tir décisif", y: 57 },
  { x: "Passes", y: 40 },
  { x: "Coup franc", y: 38 },
  { x: "Penaltis", y: 37 },
  { x: "Corner", y: 25 },
  { x: "Goals", y: 19 },
  { x: "Tir", y: 15 },
];

const dataB = dataA.map((point) => {
  const y = Math.round(point.y + 3 * (Math.random() - 0.5));
  return { ...point, y };
});

const width = 400;
const height = 400;

class CriterionDetailChart extends React.Component {
  render() {
    return (
      <VictoryChart horizontal height={height} width={width} padding={40}>
        <VictoryStack style={{ data: { width: 25 }, labels: { fontSize: 15 } }}>
          <VictoryBar
            style={{ data: { fill: "green" } }}
            data={dataA}
            y={(data) => -Math.abs(data.y)}
            labels={({ datum }) => `${Math.abs(datum.y)}%`}
          />
          <VictoryBar
            style={{ data: { fill: "tomato" } }}
            data={dataB}
            labels={({ datum }) => `${Math.abs(datum.y)}%`}
          />
        </VictoryStack>

        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 15, fill: "black" },
          }}
          /*
            Use a custom tickLabelComponent with
            an absolutely positioned x value to position
            your tick labels in the center of the chart. The correct
            y values are still provided by VictoryAxis for each tick
          */
          tickLabelComponent={
            <VictoryLabel x={width / 2} textAnchor="middle" />
          }
          tickValues={dataA.map((point) => point.x).reverse()}
        />
      </VictoryChart>
    );
  }
}

export default CriterionDetailChart;
