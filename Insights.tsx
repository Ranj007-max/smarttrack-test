import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', attendance: 85, engagement: 70 },
  { name: 'Week 2', attendance: 90, engagement: 80 },
  { name: 'Week 3', attendance: 88, engagement: 85 },
  { name: 'Week 4', attendance: 92, engagement: 95 },
];

export default function Insights() {
  return (
    <div>
      <h2 className="page-title">Insights</h2>
      <div className="card">
        <h3 style={{marginBottom: '1.5rem'}}>Weekly Performance</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="name" stroke="var(--text-color)" />
              <YAxis stroke="var(--text-color)" unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card-bg-color)',
                  borderColor: 'var(--border-color)',
                }}
              />
              <Legend />
              <Bar dataKey="attendance" fill="#8884d8" name="Avg. Attendance" />
              <Bar dataKey="engagement" fill="#82ca9d" name="Avg. Engagement" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
