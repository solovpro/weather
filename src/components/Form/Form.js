import React from 'react';
import s from './Form.module.css';

const Form = (props) => {
    return (
        <form className={s.form} onSubmit={props.getWeather}>
            <input className={s.input} type={'text'} name={'city'} placeholder={'Город'}/>
            <button className={s.button}>Получить погоду</button>
        </form>
    );
};

export default Form;