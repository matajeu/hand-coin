import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api/api";
import ApexChart from "react-apexcharts";

interface IChartProps {
  coinId: string;
}

interface IHistoricalData {
  time_open: string;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useOutletContext<IChartProps>();
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart"
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toISOString()
              ),
            },
            yaxis: {
              show: false,
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#0be881"],
                stops: [0, 100],
              },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
            theme: {
              mode: "dark",
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
