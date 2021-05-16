import modalActionTypes from './modalActionTypes';

const initialState = {
  displayDeleteModal: false,
  displayMapModal: true,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_DELETE_MODAL:
      return {
        ...state,
        displayDeleteModal: true,
      };
    case modalActionTypes.SHOW_MAP_MODAL:
      return {
        ...state,
        displayMapModal: true,
      };
    case modalActionTypes.HIDE_DELETE_MODAL:
      return {
        ...state,
        displayDeleteModal: false,
      };
    case modalActionTypes.HIDE_MAP_MODAL:
      return {
        ...state,
        displayMapModal: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
