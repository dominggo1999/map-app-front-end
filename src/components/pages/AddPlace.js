import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import { getCoordinate } from '../../utils/getCoordinate';

const AddPlace = () => {
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
    console.log(values);

    console.log(getCoordinate(values.googleMapURL));

    resetForm(initialValues);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="add-place my-form">
      <div className="container">
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

                <div className="add-place__buttons">
                  <Link to="/:userId/places">
                    <Button
                      type="submit"
                      className={`btn-${isValid && Object.keys(touched).length > 0 ? 'warning' : 'disabled'}`}
                    >Submit
                    </Button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
