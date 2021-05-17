import { useState, useEffect } from 'react';
import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import FormButton from '../shared/FormButton';
import Button from '../shared/Button';

const initValues = {
  email: '',
  password: '',
  username: '',
};

const loginValidationSchema = {
  email: Yup.string().min(3, 'Too Short!').email().required('Email is required'),
  password: Yup.string().min(8, 'Password must be 8 characters minimum').required('Password is required'),
};

const signUpValidationSchema = {
  ...loginValidationSchema,
  username: Yup.string().min(3, 'Too Short!').required('Username is required'),
};

const Auth = () => {
  const [signingIn, setSigningIn] = useState(true);
  const [validationSchema, setValidationSchema] = useState(Yup.object(loginValidationSchema));
  const [initialValues, setInitialValues] = useState(initValues);

  const switchStatus = (resetForm) => {
    setSigningIn(!signingIn);
    resetForm(initValues);
  };

  useEffect(() => {
    if(signingIn) {
      setValidationSchema(Yup.object(loginValidationSchema));
    } else {
      setValidationSchema(Yup.object(signUpValidationSchema));
    }

    setInitialValues(initValues);
  }, [signingIn]);

  const onSubmit = (values, { resetForm }) => {
    if(signingIn) {
      // handle sign in
      console.log(values.email, values.password);
    } else {
      // handle sign up
      console.log(values);
    }
  };

  return (
    <div className="auth my-form">
      <div className="container">
        <div className="card">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isValid, touched, resetForm }) => (
              <Form>
                {!signingIn
                && (
                <>

                  <label htmlFor="username">Username</label>
                  <Field
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                  />
                  <div className="error-message">
                    <ErrorMessage name="username" />
                  </div>
                </>
                )}

                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
                <div className="error-message">
                  <ErrorMessage name="email" />
                </div>

                <label htmlFor="email">Password</label>
                <Field
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                />
                <div className="error-message">
                  <ErrorMessage name="password" />
                </div>

                <FormButton
                  isValid={isValid && Object.keys(touched).length > 0}
                  redirectTo="/:userId/places"
                  content={signingIn ? 'Sign In' : 'Sign Up'}
                />

                <div className="buttons">
                  <Button
                    type="button"
                    onClick={() => switchStatus(resetForm)}
                  >Switch To {signingIn ? 'Sign Up' : 'Sign In'}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Auth;
