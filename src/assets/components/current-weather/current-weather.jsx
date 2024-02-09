import "./current-weather.css";

export const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Precautions</span>
                    </div>
                    {Math.round(data.main.temp) <= 20 && (
                        <div className="parameter-row">
                        <span className="parameter-label">What to wear</span>
                        <span className="parameter-value">Jacket/Sweater</span>
                    </div>
                    )}
                    {Math.round(data.main.temp) > 20 && (
                        <div className="parameter-row">
                        <span className="parameter-label">What to wear</span>
                        <span className="parameter-value">Cotton light clothes</span>
                    </div>
                    )}
                    {(
                        data.weather[0].description === "overcast clouds" ||
                        data.weather[0].description === "light rain" ||
                        data.weather[0].description === "rain" ||
                        data.weather[0].description === "snow" ||
                        data.weather[0].description === "light snow"
                    ) && (
                        <div className="parameter-row">
                            <span className="parameter-label">What to wear</span>
                            <span className="parameter-value">Raincoat</span>
                        </div>
                    )}
                    {(
                        data.weather[0].description === "overcast clouds" ||
                        data.weather[0].description === "light rain" ||
                        data.weather[0].description === "rain" ||
                        data.weather[0].description === "snow" ||
                        data.weather[0].description === "light snow"
                    ) && (
                        <div className="parameter-row">
                            <span className="parameter-label">Suitable for vacation</span>
                            <span className="parameter-value">No</span>
                        </div>
                    )}
                    {data.weather[0].description !="overcast clouds" && data.weather[0].description !="light rain" &&
                     data.weather[0].description !="rain" && data.weather[0].description !="snow" && data.weather[0].description !="light snow" && (
                        <div className="parameter-row">
                        <span className="parameter-label">Suitable for vacation</span>
                        <span className="parameter-value">Yes</span>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};
