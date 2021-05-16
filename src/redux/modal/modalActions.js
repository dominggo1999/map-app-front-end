import modalActionTypes from './modalActionTypes';

export const showDeleteModal = () => ({
  type: modalActionTypes.SHOW_DELETE_MODAL,
});
export const showMapModal = () => ({
  type: modalActionTypes.SHOW_MAP_MODAL,
});

export const hideDeleteModal = () => ({
  type: modalActionTypes.HIDE_DELETE_MODAL,
});

export const hideMapModal = () => ({
  type: modalActionTypes.HIDE_MAP_MODAL,
});
