import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';


const AnalyticsChart = ({ data, title = "Analytics Overview" }) => {
  const [chartType, setChartType] = useState('line');
  const [timeRange, setTimeRange] = useState('7d');

  const timeRangeOptions = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ];

  const getFilteredData = () => {
    const now = new Date();
    const daysToSubtract = parseInt(timeRange?.replace('d', ''));
    const startDate = new Date(now.getTime() - (daysToSubtract * 24 * 60 * 60 * 1000));
    
    return data?.filter(item => new Date(item.date) >= startDate);
  };

  const filteredData = getFilteredData();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg shadow-modal p-3">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry?.color }}
              />
              <span className="text-sm text-foreground">
                {entry?.name}: {entry?.value?.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">Track your facility performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex bg-muted rounded-lg p-1">
              {timeRangeOptions?.map((option) => (
                <button
                  key={option?.value}
                  onClick={() => setTimeRange(option?.value)}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-micro ${
                    timeRange === option?.value
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {option?.label}
                </button>
              ))}
            </div>
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setChartType('line')}
                className={`p-2 rounded-md transition-micro ${
                  chartType === 'line' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="TrendingUp" size={16} />
              </button>
              <button
                onClick={() => setChartType('bar')}
                className={`p-2 rounded-md transition-micro ${
                  chartType === 'bar' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="BarChart3" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="h-80 w-full" aria-label={`${title} ${chartType} chart`}>
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.3} />
                <XAxis 
                  dataKey="date" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="var(--color-primary)" 
                  strokeWidth={2}
                  dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'var(--color-primary)', strokeWidth: 2 }}
                  name="Views"
                />
                <Line 
                  type="monotone" 
                  dataKey="visits" 
                  stroke="var(--color-accent)" 
                  strokeWidth={2}
                  dot={{ fill: 'var(--color-accent)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'var(--color-accent)', strokeWidth: 2 }}
                  name="Visits"
                />
              </LineChart>
            ) : (
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.3} />
                <XAxis 
                  dataKey="date" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="views" 
                  fill="var(--color-primary)" 
                  radius={[4, 4, 0, 0]}
                  name="Views"
                />
                <Bar 
                  dataKey="visits" 
                  fill="var(--color-accent)" 
                  radius={[4, 4, 0, 0]}
                  name="Visits"
                />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              {filteredData?.reduce((sum, item) => sum + item?.views, 0)?.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Total Views</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              {filteredData?.reduce((sum, item) => sum + item?.visits, 0)?.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Total Visits</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              {filteredData?.length > 0 ? Math.round(filteredData?.reduce((sum, item) => sum + item?.views, 0) / filteredData?.length) : 0}
            </p>
            <p className="text-sm text-muted-foreground">Avg Daily Views</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              {filteredData?.length > 0 ? Math.round((filteredData?.reduce((sum, item) => sum + item?.visits, 0) / filteredData?.reduce((sum, item) => sum + item?.views, 0)) * 100) || 0 : 0}%
            </p>
            <p className="text-sm text-muted-foreground">Conversion Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;