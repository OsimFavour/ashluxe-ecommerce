import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../components/CustomInput'
import { loginUser, setRedirectToHome } from '../../features/user/userSlice'



const loginSchema = yup.object({
    email_or_phone: yup
    .string()
    .email('Email Should Be Valid')
    .required('Email Address is Required'),
    password: yup.string().required('Password is Required'),
})



const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { redirectToHome } = useSelector((state) => state.auth)

    const formik = useFormik({
        initialValues: {
            email_or_phone: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            console.log(values)
            dispatch(loginUser(values))
        }
    })


    useEffect(() => {
        if (redirectToHome) {
            navigate('/')
            dispatch(setRedirectToHome(false))
        }
    }, [redirectToHome, navigate, dispatch])
    
    
    return (
        <section className="auth-wrapper">
            <div className="auth-header">
                <h1>Login</h1>
            </div>

            <section className="forms align-items-center">
                <form 
                    action=""
                    onSubmit={formik.handleSubmit}
                >
                    <div className="input-box">
                        <label htmlFor="email"><strong>Email or Phone</strong></label>
                        
                        <CustomInput
                            type='email' 
                            name='email' 
                            // placeholder='Email or Phone Number' 
                            value={formik.values.email_or_phone}
                            onChange={formik.handleChange('email_or_phone')}
                            onBlur={formik.handleBlur('email_or_phone')}
                        />

                        <div className="error">
                            {formik.touched.email_or_phone && formik.errors.email_or_phone}
                        </div>
                    </div>

                     
                    <div className="">
                        <div className="password">
                            <label htmlFor="Password"><strong>Password</strong></label>
                            <Link to="/forgot-password">Forgot your password?</Link>
                        </div>

                        <CustomInput 
                            type='password' 
                            name='password' 
                            // placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                        />

                        <div className="error">
                            {formik.touched.password && formik.errors.password}
                        </div>

                    </div>
                    <div className="input-btn">
                        <button type="submit" className="signin-btn"> Sign in</button>
                        <hr className="horizontal-line"/>
                        <p className="or">or</p>
                        <button type="submit" className="create-btn">Create Account</button>
                    </div>

                </form>
            </section>
        </section>
    )
}

export default Login