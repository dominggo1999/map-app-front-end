import Button from './Button';

const FormButton = ({ isValid, content, cancel }) => {
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
        {
          cancel && (
          <Button
            className="danger"
            type="button"
            clickHandler={cancel}
          >Cancel
          </Button>
          )
        }
      </div>
    </>
  );
};

export default FormButton;
