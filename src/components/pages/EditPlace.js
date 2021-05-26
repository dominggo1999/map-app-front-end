import { useState, useEffect } from 'react';
import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useParams, useHistory } from 'react-router-dom';
import FormButton from '../shared/FormButton';
import ErrorModal from '../shared/ErrorModal';

const emptyForm = {
  title: '',
  description: '',
};

const EditPlace = () => {
  const [place, setPlace] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { placeId, userId } = useParams();
  const history = useHistory();
  const backToMyPlaces = () => {
    history.push(`/${userId}/places`);
  };

  useEffect(() => {
    setLoading(true);
    // Get place data from api
    const getPlaceById = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/places/${placeId}`);
        const responseData = await response.json();

        if(!response.ok) {
          throw new Error(responseData.message);
        }else{
          // Set place to data from database
          setPlace({
            title: responseData.place.title,
            description: responseData.place.description,
          });
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getPlaceById();
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Too Short!').required('Title is required'),
    description: Yup.string().min(3, 'Too Short!').required('Description is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Test');

    const updatePlace = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/places/${placeId}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            title: values.title,
            description: values.description,
          }),
        });

        const responseData = await response.json();
        if(!response.ok) {
          throw new Error(responseData.message);
        }else{
          backToMyPlaces();
        }

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setError(err);
        setLoading(false);
      }
    };

    updatePlace();
  };

  const hideModal = () => {
    setError(null);
    history.push('/');
  };

  if(loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <>
      {
        error && (
        <ErrorModal
          errorMessage={error}
          hideModal={hideModal}
        />
        )
      }
      <div className="edit-place my-form">
        <div className="container">
          <div className="card">
            <Formik
              initialValues={place}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >

              {({ isValid }) => (
                <Form>
                  <label htmlFor="title">Title</label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                  />
                  <div className="error-message">
                    <ErrorMessage name="title" />
                  </div>
                  <label htmlFor="description">Description</label>
                  <Field
                    as="textarea"
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                  />
                  <div className="error-message">
                    <ErrorMessage name="description" />
                  </div>
                  <FormButton
                    isValid={isValid}
                    cancel={backToMyPlaces}
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

export default EditPlace;
