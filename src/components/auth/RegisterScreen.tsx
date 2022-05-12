import React from 'react'
import './style.css';
import { Form, Formik } from 'formik';
import formJson from '../../data/custom-form.json';
import * as Yup from 'yup';
import { MyTextInput } from './MyTextInput';

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value
    if (!input.validations) continue;

    let schema = Yup.string()
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`)
        }
        if (rule.type === 'email') {
            schema = schema.email('Revise el formato del email')
        }
        if (rule.type === 'password') {
            schema = schema.oneOf([Yup.ref('password1')], 'Las constraseñas no son iguales')
        }
    }
    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })

export const RegisterScreen = () => {


    return (
        <div className="container login-container">
            <div className="row">

                <div className="col-md-3 login-form-2">
                    <h3>Registro</h3>
                    <Formik initialValues={initialValues}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        validationSchema={validationSchema}
                    >
                        {
                            (formik) => (

                                <Form>
                                    {formJson.map(({ type, name, placeholder, label }) => {
                                        if (type === 'input' || type === 'password' || type === 'email') {
                                            return <MyTextInput
                                                key={name}
                                                type={(type as any)}
                                                name={name}
                                                label={label}
                                                placeholder={placeholder} />
                                        }

                                        throw new Error(`El type: ${type}, no es soportado`)

                                    })}

                                    <button type='submit'>Submit</button>
                                </Form>

                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}
