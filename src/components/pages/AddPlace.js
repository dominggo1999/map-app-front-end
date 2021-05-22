import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from '../shared/Button';
import { getCoordinate } from '../../utils/getCoordinate';
import FormButton from '../shared/FormButton';
import ErrorModal from '../shared/ErrorModal';

const AddPlace = () => {
  const user = useSelector((state) => state.auth.userID);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const initialValues = {
    title: '',
    description: '',
    address: '',
    googleMapURL: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Too Short!').required('Title is required'),
    description: Yup.string().min(3, 'Too Short!').required('Description is required'),
    address: Yup.string().min(3, 'Too Short!').required('Address is required'),
    googleMapURL: Yup.string().min(20).required('Please enter website'),
  });

  const onSubmit = (values, { resetForm }) => {
    setLoading(true);

    const location = getCoordinate(values.googleMapURL);

    const uploadPlace = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/places/', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            title: values.title,
            description: values.description,
            address: values.address,
            location: {
              lat: location[0],
              lng: location[1],
            },
            creator: user,
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wmf.org%2Fsites%2Fdefault%2Ffiles%2Fshutterstock_547447339_-_copy.jpg&f=1&nofb=1',
          }),
        });

        const responseData = await response.json();

        if(!response.ok) {
          throw new Error(responseData.message);
        }else{
          resetForm(initialValues);
          history.push('/');
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if(location[0] && location[1]) {
      uploadPlace();
    } else {
      setError('Please input a valid google maps link');
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      {
        error && (
        <ErrorModal
          errorMessage={error}
          hideModal={() => setError(null)}
        />
        )
      }
      <div className="add-place my-form">
        <div className="container">
          {loading && <h1>Loading ...</h1>}

          <div className="card">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isValid, touched }) => (
                <Form>
                  <label htmlFor="title">Title</label>
                  <Field
                    type="text"
                    placeholder="Title"
                    name="title"
                    id="title"
                    required
                  />
                  <div className="error-message">
                    <ErrorMessage name="title" />
                  </div>

                  <label htmlFor="description">Description</label>
                  <Field
                    as="textarea"
                    type="text"
                    placeholder="Description"
                    name="description"
                    id="description"
                    required
                  />
                  <div className="error-message">
                    <ErrorMessage name="description" />
                  </div>

                  <label htmlFor="address">Address</label>
                  <Field
                    type="text"
                    placeholder="Address"
                    name="address"
                    id="address"
                    required
                  />
                  <div className="error-message">
                    <ErrorMessage name="address" />
                  </div>

                  <label htmlFor="googleMapURL">Google Map URL</label>
                  <Field
                    type="text"
                    placeholder="Google Map URL"
                    name="googleMapURL"
                    id="googleMapURL"
                    required
                  />
                  <div className="error-message">
                    <ErrorMessage name="googleMapURL" />
                  </div>

                  <FormButton
                    isValid={isValid && Object.keys(touched).length > 0}
                    redirectTo="/:userId/places"
                  />

                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPlace;
