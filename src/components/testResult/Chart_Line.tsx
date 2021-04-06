import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { PreviousTest } from "../../feature/testResult/testSlice";
interface ChartLineType {
  data: PreviousTest[];
}

export default function Chart_Line({ data }: ChartLineType) {
  return (
    <div>
      {data?.length === 0 ? (
        <div>로그인을 하셔야 이전 검사기록을 확인할 수 있습니다.</div>
      ) : (
        <LineChart width={700} height={300} data={data} margin={{}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="worry" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#82ca9d" />
        </LineChart>
      )}
    </div>
  );
}
