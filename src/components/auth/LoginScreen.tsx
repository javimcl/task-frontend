import React, { FormEvent } from 'react'
import './login.css';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';





export const LoginScreen = () => {

    const { formData, onChange, email, password } = useForm({
        email: '',
        password: ''
    });

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('handleLogin');
        console.log('email:' + email);
        console.log('password:' + password);
        startLogin(email, password);
    }


    return (
        <div className='container login-container'>
            <div className='row'>
                <div className='col-md-6 login-form-1'>
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className='form-group'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Correo'
                                name='email'
                                value={email}
                                onChange={(ev) => onChange(ev)}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type="password"
                                className='form-control'
                                placeholder='Contraseña'
                                name='password'
                                value={password}
                                onChange={(ev) => onChange(ev)}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type="submit"
                                className='btnSubmit'
                                placeholder='Login'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
