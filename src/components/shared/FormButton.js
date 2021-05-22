import { Link, Redirect } from 'react-router-dom';
import Button from './Button';

const FormButton = ({ isValid, content }) => {
  return (
    <>
      <div className="form-buttons">
        {
          !isValid
            ? (
              <Button
                className="btn-disabled"
              >
                {content || 'Submit'}
              </Button>
            )
            : (
              <Button
                type="submit"
                className="btn-warning"
              >
                {content || 'Submit'}
              </Button>
            )
        }
      </div>
    </>
  );
};

export default FormButton;
