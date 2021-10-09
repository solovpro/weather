import React from 'react';
import s from './Weather.module.css';

const Weather = (props) => {
    return (
        <div className={s.weather}>
            {props.temp &&
                <div className={s.params}>
                    <div>Местоположение: {props.city}, {props.country}</div>
                    <div>Температура: {Math.floor(props.temp)}</div>
                    <div>Давление: {props.pressure}</div>
                    <div>Закат солнца: {props.sunset}</div>
                </div>
            }
            <div className={s.error}>{props.error}</div>
        </div>
    );
};

export default Weather;