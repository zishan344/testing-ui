import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DataDashboard = () => {
  const data = [
    {
      name: "JUN",
      seriesA: 854,
      seriesB: 54,
      seriesC: 87,
      amt: 2400,
    },
    {
      name: "FEB",
      seriesA: 871,
      seriesB: 54,
      seriesC: 847,
      amt: 2210,
    },
    {
      name: "MAR",
      seriesA: 78,
      seriesB: 87,
      seriesC: 877,
      amt: 2290,
    },
    {
      name: "APR",
      seriesA: 858,
      seriesB: 477,
      seriesC: 877,
      amt: 2000,
    },
    {
      name: "MAY",
      seriesA: 845,
      seriesB: 584,
      seriesC: 544,
      amt: 2181,
    },
    {
      name: "JUN",
      seriesA: 44,
      seriesB: 754,
      seriesC: 54,
      amt: 2500,
    },
    {
      name: "JULY",
      seriesA: 845,
      seriesB: 54,
      seriesC: 54,
      amt: 2100,
    },
    {
      name: "AUG",
      seriesA: 541,
      seriesB: 454,
      seriesC: 854,
      amt: 2100,
    },
    {
      name: "SEP",
      seriesA: 545,
      seriesB: 845,
      seriesC: 542,
      amt: 2100,
    },
    {
      name: "OCT",
      seriesA: 54,
      seriesB: 314,
      seriesC: 444,
      amt: 2100,
    },
    {
      name: "NOV",
      seriesA: 500,
      seriesB: 54,
      seriesC: 20,
      amt: 562,
    },
    {
      name: "DEC",
      seriesA: 87,
      seriesB: 844,
      seriesC: 45,
      amt: 2100,
    },
  ];
  return (
    <div className="row-span-3 flex flex-col justify-between">
      <div className="flex justify-between gap-2 items-center py-2 mx-4">
        <h1 className="text-white font-semibold text-2xl">Email send</h1>
        <div className="text-white flex items-center gap-4">
          <h3>Week</h3>
          <h3>Month</h3>
          <h3>
            <button className="btn btn-info btn-sm text-white">Year</button>
          </h3>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="seriesA" stackId="a" fill="#339DD9 " barSize={10} />
          <Bar dataKey="seriesB" stackId="a" fill="#F8EA3D" barSize={10} />
          <Bar dataKey="seriesC" stackId="a" fill="#29EAC1" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataDashboard;
