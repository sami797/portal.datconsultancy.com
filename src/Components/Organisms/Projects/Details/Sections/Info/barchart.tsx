import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface PaymentTermsBarChartProps {
  paymentTerms: string[];
}

const PaymentTermsBarChart: React.FC<PaymentTermsBarChartProps> = ({ paymentTerms }) => {
  // Calculate the frequency of each term
  const termCount = paymentTerms.reduce((acc, term) => {
    acc[term] = (acc[term] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  // Calculate the total number of terms
  const totalTerms = paymentTerms.length;

  // Convert frequencies to percentages and prepare chart data
  const chartData = Object.entries(termCount).map(([name, count]) => ({
    name,
    value: (count / totalTerms) * 100, // Convert to percentage
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 12 }} 
          tickLine={{ stroke: '#d0d0d0' }} 
        />
        <YAxis 
          tick={{ fontSize: 12 }} 
          tickLine={{ stroke: '#d0d0d0' }} 
          domain={[0, 100]} // Ensure Y-axis shows percentage from 0 to 100%
          tickFormatter={(tick) => `${tick}%`} // Add percentage sign to Y-axis ticks
        />
        <Tooltip 
          formatter={(value: number) => `${value.toFixed(2)}%`} // Format tooltip to show percentage
        />
        <Bar 
          dataKey="value" 
          fill="#8884d8" 
          radius={[5, 5, 0, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PaymentTermsBarChart;
