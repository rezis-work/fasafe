import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const CustomBarChart = ({ budgetList, width }) => {
  return (
    <div className=" border rounded-sm p-5">
      <h2 className=" font-bold text-lg">Activity</h2>
      <BarChart
        width={width}
        height={500}
        data={budgetList}
        margin={{
          top: 5,
          left: 5,
          right: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalSpend" stackId="a" fill="#4845d2" />
        <Bar dataKey="amount" stackId="b" fill="#C3C2ff" />
      </BarChart>
    </div>
  );
};

export default CustomBarChart;
