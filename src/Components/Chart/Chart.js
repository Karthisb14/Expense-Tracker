import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {

    const dataPointsValues = props.datapoints.map(datapoint => datapoint.Value);
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.datapoints.map((datapoint) => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.Value}
                    maxValue={totalMaximum}
                    label={datapoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;