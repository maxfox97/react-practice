import { connect } from "react-redux";
import React from "react";
import { useForm } from 'react-hook-form';
import { login } from '../redux/auth-reducer';
import { Navigate } from "react-router-dom";
//import s from './Login.module.css';  //style react - hook - form


const Login = (props) => {


    if (props.isAuth) {
        return <Navigate replace to={"/profile"} />
    }

    return <div>
        <h1>login</h1>
        <LoginForm login={props.login} />
    </div>
}

const LoginForm = (props) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data);
        props.login(data.email, data.password, data.rememberMe);
        reset();

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>Email :</span>
                <br />
                <input type="text"
                    {...register('email', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        }
                    })}
                />
            </label>
            <div style={{ height: 40 }}>
                {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
            </div>
            <label>
                <span>Password:</span>
                <br />
                <input type="password"
                    {...register('password', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 6,
                            message: 'Минимум 6 символов'
                        }
                    })}
                />
            </label>
            <div style={{ height: 40 }}>
                {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
            </div>
            <input type="submit" disabled={!isValid} />
        </form>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);