import React, {useState} from 'react';
import s from './App.module.css';
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

const App = () => {

    const API_KEY = '919ffe3d3ee64e1ca790ae9d2075e143';

    const [state, setstate] = useState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    });

    let getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await apiUrl.json();

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunsetDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

            setstate({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunsetDate,
                error: undefined
            })
        } else {
            setstate({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: 'Введите название города!'
            })
        }
    }

    return (
        <div className={s.app}>
            <div className={s.main}></div>
            <div className={s.container}>
                <div className={s.name}>Погодное приложение</div>
                <div className={s.row}>
                    <div className={s.info}>
                        <Info/>
                    </div>
                    <div className={s.formWeather}>
                        <Form getWeather={getWeather}/>
                        <Weather classname={s.weather} temp={state.temp}
                                 city={state.city}
                                 country={state.country}
                                 pressure={state.pressure}
                                 sunset={state.sunset}
                                 error={state.error}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;