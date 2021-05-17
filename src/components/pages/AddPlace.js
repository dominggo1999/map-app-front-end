import {
  useFormik, Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Button from '../shared/Button';
import LocationSearch from '../shared/LocationSearch';

const AddPlace = () => {
  const initialValues = {
    title: '',
    description: '',
    address: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Too Short!').required('Title is required'),
    description: Yup.string().min(3, 'Too Short!').required('Description is required'),
    address: Yup.string().min(3, 'Too Short!').required('Address is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
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
                <label htmlFor="Description">Description</label>
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
                <label htmlFor="Address">Address</label>
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

                <LocationSearch />

                <div className="add-place__buttons">
                  <Button
                    type="submit"
                    className={`btn-${isValid && Object.keys(touched).length > 0 ? 'warning' : 'disabled'}`}
                  >Submit
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

export default AddPlace;
