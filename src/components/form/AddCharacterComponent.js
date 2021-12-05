import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddCharacterComponent = () => {
    const [fieldValue, setFieldValue] = useState();
    return (
        <div className="characters ">
            <div className="form">
                <h2 className="t-center">Add new Hero</h2>
                <Formik
                    initialValues={{ name: '', email: '', gender: '', url:'' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="name" name="name" />
                            <Field type="email" name="email" />
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="gender" name="gender" />
                            <Field type="url" name="url" />
                            <input id="file" name="file" type="file" onChange={(event) => {
                                setFieldValue("file", event.currentTarget.files[0]);
                            }} className="form-control" />

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>


        </div>
    );
};

export default AddCharacterComponent;