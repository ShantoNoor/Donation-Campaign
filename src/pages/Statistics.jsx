import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import useGetData from "../hooks/useGetData";
import getValueFromLocalStorage from "../utility/getValueFromLocalStorage";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) * 0.7;
  const y = cy + radius * Math.sin(-midAngle * RADIAN) * 0.9;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "28px", fontWeight: "700" }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};
export default function Statistics() {
  const donated_list = getValueFromLocalStorage("donate_list");
  const donate_data = useGetData();
  const [swidth, setSwidth] = useState(500);

  const data = [
    { name: "Group A", value: donated_list.length },
    { name: "Group B", value: donate_data.length - donated_list.length },
  ];

  useEffect(() => {
    setSwidth(window.innerWidth >= 600 ? 500 : 300);
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setSwidth(window.innerWidth >= 600 ? 500 : 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <PieChart width={swidth} height={swidth} style={{ margin: "60px auto" }}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={swidth / 2}
          fill="#8884d8"
          dataKey="value"
          startAngle={0}
          endAngle={-360}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              strokeWidth={swidth === 500 ? 5 : 2}
            />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14">
        <span className="flex items-center gap-4">
          <span className="text-black2">Your Donation</span>{" "}
          <span
            className="w-[100px] h-[12px] block rounded-sm"
            style={{ backgroundColor: COLORS[0] }}
          ></span>
        </span>
        <span className="flex items-center gap-4">
          <span className="text-black2">Total Donation</span>{" "}
          <span
            className="w-[100px] h-[12px] block rounded-sm"
            style={{ backgroundColor: COLORS[1] }}
          ></span>
        </span>
      </div>
    </>
  );
}
