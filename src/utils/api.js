const api = {
    getWeatherDetails: ({city, lat, lon}) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${lon}&units=metric&APPID=8407ba58339ecdca94022cb05796b609`
};
export default api;