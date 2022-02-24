import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../redux/Action/postAction';


const Adduser = (props) => {

    const dispatch = useDispatch();

    const validationSchema = yup.object({
        fname: yup
            .string()
            .required('Required'),
        lname: yup
            .string()
            .required('Required'),
        email: yup
            .string()
            .required('Required')
            .email('Invalid Email Format'),
        state: yup
            .string()
            .required('Required'),
        city: yup
            .string()
            .required('Required'),
        pincode: yup
            .string()
            .required('Required')
            .max(5, 'max limite is 5 only'),
    })

    const onUserAdd = values => {
        const object = {
            fname: values.fname,
            lname: values.lname,
            email: values.email,
            state: values.state,
            city: values.city,
            pincode: values.pincode
        }
        dispatch(addUserAction(object, props.history))
    }


    return (
        <div className="container-fluid">
            <Formik
                initialValues={{
                    fname: '',
                    lname: '',
                    email: '',
                    state: '',
                    city: '',
                    pincode: ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => onUserAdd(values)}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>First Name</label>
                            <Field
                                type="text"
                                name="fname"
                                placeholder="fisrt name"
                                className="form-control"
                                value={values.fname}
                            />
                            {errors.fname && touched.fname && (
                                <div className="text-left">
                                    <span style={{ color: 'red' }}>{errors.fname}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>Last Name</label>
                            <Field
                                type="text"
                                name="lname"
                                placeholder="last name"
                                className="form-control"
                                value={values.lname}
                            />
                            {errors.lname && touched.lname && (
                                <div className="text-left">
                                    <span style={{ color: 'red' }}>{errors.lname}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>Email</label>
                            <Field
                                type="text"
                                name="email"
                                placeholder="email"
                                className="form-control"
                                value={values.email}
                            />
                            {errors.email && touched.email && (
                                <div className="text-left">
                                    <span style={{ color: 'red' }}>{errors.email}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>State</label>
                            <Field
                                type="text"
                                name="state"
                                placeholder="State"
                                className="form-control"
                                value={values.state}
                            />
                            {errors.state && touched.state && (
                                <div className="text-left">
                                    <span style={{ color: 'red' }}>{errors.state}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>City</label>
                            <Field
                                type="text"
                                name="city"
                                placeholder="City"
                                className="form-control"
                                value={values.city}
                            />
                            {errors.city && touched.city && (
                                <div className="text-left">
                                    <span style={{ color: 'red' }}>{errors.city}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <label style={{ fontWeight: 'bold' }}>Pincode</label>
                            <Field
                                type="text"
                                name="pincode"
                                placeholder="Pincode"
                                className="form-control"
                                value={values.pincode}
                            />
                            {errors.pincode && touched.pincode && (
                                <div className="text-left">
                                    <span style={{ color: 'red' }}>{errors.pincode}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
};

export default Adduser;
