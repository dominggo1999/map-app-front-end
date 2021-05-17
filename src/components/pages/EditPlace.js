import { useState, useEffect } from 'react';
import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import FormButton from '../shared/FormButton';

const dummyPlace = {
  id: 'p1',
  title: 'Empire State Building',
  description: 'One of the most famous sky scrapers in the world!',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
  address: '20 W 34th St, New York, NY 10001',
  location: {
    lat: 40.7484405,
    lng: -73.9878584,
  },
  creator: 'u1',
};
const EditPlace = () => {
  const [place, setPlace] = useState();

  useEffect(() => {
    // Get place data from api

    // Set place to data from database
    setPlace({
      title: dummyPlace.title,
      description: dummyPlace.description,
    });
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Too Short!').required('Title is required'),
    description: Yup.string().min(3, 'Too Short!').required('Description is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm({
      title: '',
      description: '',
    });
  };

  if(!place) {
    return (
      <div className="card">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="edit-place my-form">
      <div className="container">
        <div className="card">
          <Formik
            initialValues={place}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >

            {({ isValid, touched }) => (
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
                  redirectTo="/:userId/places"
                />

              </Form>
            )}

          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditPlace;
