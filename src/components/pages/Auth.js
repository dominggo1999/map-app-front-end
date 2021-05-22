import { useState, useEffect } from 'react';
import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormButton from '../shared/FormButton';
import Button from '../shared/Button';
import { userLogin } from '../../redux/auth/authActions';
import ErrorModal from '../shared/ErrorModal';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

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

  const signIn = async (values, resetForm) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const responseData = await response.json();
      if(!response.ok) {
        setError(responseData.message || 'Something went wrong, please try again');
      } else {
        dispatch(userLogin(responseData.user));
      }
    } catch (err) {
      setError(err.message || 'Something went wrong, please try again');
    }
  };

  const onSubmit = async (values, { resetForm }) => {
    if(signingIn) {
      // handle sign in
      signIn(values, resetForm);
    } else {
      // handle sign up
      try {
        const response = await fetch('http://localhost:5000/api/users/signUp', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
          }),
        });
        const responseData = await response.json();

        if(!response.ok) {
          setError(responseData.message || 'Something went wrong, please try again');
        }else {
          setError('');
          dispatch(userLogin());
        }
      } catch (err) {
        setError(err.message || 'Something went wrong, please try again');
      }
    }
  };

  if(isLogin) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {error && (
        <ErrorModal
          errorMessage={error}
          hideModal={() => setError('')}
        />
      )}
      <div className="auth my-form">
        {isLoading && <h1>Loading...</h1>}
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
    </>
  );
};

export default Auth;
