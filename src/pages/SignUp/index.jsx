import * as yup from 'yup'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, setRedirectToLogin } from '../../features/user/userSlice';



const signUpSchema = yup.object({
    first_name: yup.string().required('First Name is Required'),
    last_name: yup.string().required('Last Name is Required'),
    password: yup.string().required('Password is Required'),
    email: yup.string().email('Email Should Be Valid').required('Email Address is Required'),
    phone_no: yup.string().required('Phone Number is Required'),
});


const SignUp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { redirectToLogin } = useSelector((state) => state.auth)

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            password: '',
            email: '',
            phone_no: ''
        },
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            
            await dispatch(registerUser(values))

            
        }
    })


    useEffect(() => {
        if (redirectToLogin) {
            navigate('/login')
            dispatch(setRedirectToLogin(false))
        }
    }, [redirectToLogin, navigate, dispatch])


    return (
        <section className="auth-wrapper">
            <div className="auth-header">
                <h1>Create Account</h1>
            </div>

            <section className="forms align-items-center">
                <form 
                    action=""
                    onSubmit={formik.handleSubmit}
                >
                    <div className="input-box">
                        <label htmlFor="first_name"><strong>First Name</strong></label>
                    
                        <CustomInput
                            type='text' 
                            name='first_name' 
                            value={formik.values.first_name}
                            onChange={formik.handleChange('first_name')}
                            onBlur={formik.handleBlur('first_name')}
                        />

                        <div className="error">
                            {formik.touched.first_name && formik.errors.first_name}
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="last_name"><strong>Last Name</strong></label>

                        <CustomInput 
                            type='text' 
                            name='last_name' 
                            value={formik.values.last_name}
                            onChange={formik.handleChange('last_name')}
                            onBlur={formik.handleBlur('last_name')}
                        />

                        <div className="error">
                            {formik.touched.last_name && formik.errors.last_name}
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor=""><strong>Password</strong></label>

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

                    <div className="input-box">
                        <label htmlFor="email"><strong>Email</strong></label>
                    
                        <CustomInput 
                            type='email' 
                            name='email' 
                            // placeholder='Email' 
                            value={formik.values.email}
                            onChange={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                        />

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="phone_no"><strong>Phone Number</strong></label>
                    
                        <CustomInput 
                            type='tel' 
                            name='phone_no' 
                            // placeholder='Phone Number'  
                            className='mt-1 mb-3' 
                            value={formik.values.phone_no}
                            onChange={formik.handleChange('phone_no')}
                            onBlur={formik.handleBlur('phone_no')}
                        />

                        <div className="error">
                            {formik.touched.phone_no && formik.errors.phone_no}
                        </div>
                    </div>



                    <div className="input-btn">
                        <button type="submit" className="signin-btn"> Sign up</button>
                    </div>

                </form>
            </section>
        </section>
    )
}

export default SignUp