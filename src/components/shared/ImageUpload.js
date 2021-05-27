import { useRef, useState, useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import Button from './Button';

const ImageUpload = ({
  id, setFieldValue, setFieldTouched,
}) => {
  const [previewURL, setPreviewURL] = useState();
  const [file, setFile] = useState();
  const filePickerRef = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
    setFieldTouched('file', true);
  };

  const pickedHandler = (e) => {
    setFieldValue('file', e.target.files[0]);
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if(!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewURL(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    <>
      <Field
        type="file"
        id={id}
        name={id}
        innerRef={filePickerRef}
        style={{ display: 'none' }}
        onChange={pickedHandler}
        value={undefined} // important
        accept=".jpg,.jpeg,.png"
      />
      <Button
        className="danger"
        onClick={pickImageHandler}
        type="button"
      >
        PICK IMAGE
      </Button>
      <div className="image-upload">
        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
          />
        )}

        {!previewURL && (
          <p>Please pick an image</p>
        )}

      </div>
      <div className="error-message">
        <ErrorMessage name={id} />
      </div>
    </>
  );
};

export default ImageUpload;
