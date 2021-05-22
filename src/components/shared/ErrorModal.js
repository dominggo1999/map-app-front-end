import Backdrop from './Backdrop';
import Button from './Button';

const ErrorModal = ({ hideModal, errorMessage }) => {
  return (
    <>
      <div className="container">
        <Backdrop clickHandler={hideModal} />
        <div className="error-modal card">
          <h3 className="error-modal__header">
            {errorMessage}
          </h3>
          <div className="error-modal__body">
            <div className="error-modal__buttons">
              <Button clickHandler={hideModal}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
