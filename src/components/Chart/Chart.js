import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Maps all of the expense values for each month into array dataPointValues
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // ...dataPointValues makes it so Math.max() has 12 arguments to compare
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
