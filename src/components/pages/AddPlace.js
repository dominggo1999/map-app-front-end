import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getCoordinate } from '../../utils/getCoordinate';
import FormButton from '../shared/FormButton';
import ErrorModal from '../shared/ErrorModal';
import ImageUpload from '../shared/ImageUpload';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

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
    file: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Too Short!').required('Title is required'),
    description: Yup.string().min(3, 'Too Short!').required('Description is required'),
    address: Yup.string().min(3, 'Too Short!').required('Address is required'),
    googleMapURL: Yup.string().min(20).required('Please enter website'),
    file: Yup.mixed()
      .required('Image is required')
      .test(
        'fileSize',
        'The file is too large',
        (value) => {
          return value && value.size <= 1000000;
        },
      )
      .test(
        'fileFormat',
        'Unsupported Format',
        (value) => {
          return value && SUPPORTED_FORMATS.includes(value.type);
        },
      ),
  });

  const onSubmit = (values, { resetForm }) => {
    setLoading(true);

    const location = getCoordinate(values.googleMapURL);

    console.log(location);

    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('address', values.address);
    formData.append('location[lat]', location[0]);
    formData.append('location[lng]', location[1]);
    formData.append('creator', user);
    formData.append('imageUrl', values.file);

    // eslint-disable-next-line no-restricted-syntax
    // for (const entry of formData.entries()) {
    //   console.log(entry);
    // }

    const uploadPlace = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/places/', {
          method: 'POST',
          body: formData,
        });

        const responseData = await response.json();

        if(!response.ok) {
          throw new Error(responseData.message);
        }else{
          resetForm(initialValues);
          history.push(`/${user}/places`);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
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
              {({
                isValid, touched, setFieldValue, setFieldTouched,
              }) => (
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

                  <ImageUpload
                    id="file"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />

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
