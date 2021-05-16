import Backdrop from './Backdrop';
import Button from './Button';

const DeleteModal = ({ hideModal, deleteButtonClickHandler }) => {
  return (
    <>
      <div className="container">
        <Backdrop clickHandler={hideModal} />
        <div className="delete-modal card">
          <h3 className="delete-modal__header">
            Are you sure ?
          </h3>
          <div className="delete-modal__body">
            <p className="delete-modal__description">Do you want to proceed and delete this place ? Please note that it can&apos;t be undone thereafter</p>
            <div className="delete-modal__buttons">
              <Button clickHandler={hideModal}>Cancel</Button>
              <Button
                clickHandler={deleteButtonClickHandler}
                className="btn-danger"
              >Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
