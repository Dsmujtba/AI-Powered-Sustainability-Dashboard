export const generateHistoricalData = (months) => {
  return Array.from({ length: months }, (_, i) => ({
    name: new Date(2023, i, 1).toLocaleString('default', { month: 'short' }),
    emissions: Math.random() * 5000 + 1000,
    water: Math.random() * 10000 + 5000,
    waste: Math.random() * 1000 + 500,
    sdgScore: Math.random() * 50 + 50,
  }));
};

export const generateForecastData = (months, lastHistorical) => {
  return Array.from({ length: months }, (_, i) => ({
    name: new Date(2024, i, 1).toLocaleString('default', { month: 'short' }),
    emissions: lastHistorical.emissions * (1 - 0.05 * Math.random()),
    water: lastHistorical.water * (1 - 0.03 * Math.random()),
    waste: lastHistorical.waste * (1 - 0.04 * Math.random()),
    sdgScore: lastHistorical.sdgScore * (1 + 0.02 * Math.random()),
  }));
};
