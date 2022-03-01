import { useEffect, useState } from "react";
import { Chart } from "../../UI/Chart";
import { ChartLabel } from "../../UI/ChartLabel";

function ControllerCharts({ styles }) {
  const [selectedLabel, setSelectedLabel] = useState(1);
  const [charts, setCharts] = useState([]);

  const labesData = [
    { id: 1, value: "Speed" },
    { id: 2, value: "Weather" },
    { id: 3, value: "Distance" },
    { id: 4, value: "Gps" },
  ];

  const chartsData = [
    {
      id: 1,
      charts: [
        { id: 1, value: 100 },
        { id: 2, value: 20 },
        { id: 3, value: 40 },
        { id: 4, value: 70 },
        { id: 5, value: 49 },
        { id: 6, value: 100 },
      ],
    },
    {
      id: 2,
      charts: [
        { id: 1, value: 20 },
        { id: 2, value: 70 },
        { id: 3, value: 90 },
        { id: 4, value: 30 },
        { id: 5, value: 45 },
        { id: 6, value: 80 },
      ],
    },
    {
      id: 3,
      charts: [
        { id: 1, value: 50 },
        { id: 2, value: 60 },
        { id: 3, value: 80 },
        { id: 4, value: 60 },
        { id: 5, value: 80 },
        { id: 6, value: 100 },
      ],
    },
    {
      id: 4,
      charts: [
        { id: 1, value: 40 },
        { id: 2, value: 60 },
        { id: 3, value: 70 },
        { id: 4, value: 60 },
        { id: 5, value: 80 },
        { id: 6, value: 90 },
      ],
    },
  ];

  useEffect(() => {
    setCharts(chartsData.find(ch => ch.id === selectedLabel).charts)
  },[])

  useEffect(() => {
    setCharts(chartsData.find(ch => ch.id === selectedLabel).charts)
  },[selectedLabel])

  return (
    <div className={styles.controllerCharts}>
      <div className={styles.chartsContainer}>
        {charts.map((chart) => (
          <Chart key={chart.id} size={chart.value}></Chart>
        ))}
      </div>
      <div className={styles.chartsLabels}>
          {labesData.map(label => (
              <ChartLabel elevation={6} key={label.id} selected = {label.id === selectedLabel}
               onClick={() => setSelectedLabel(label.id)}>{label.value}</ChartLabel >
          ))}
      </div>
    </div>
  );
}

export default ControllerCharts;
