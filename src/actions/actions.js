export const ADD_TEXT = "ADD_TEXT";
export const REMOVE_TEXT = "REMOVE_TEXT";
export const EDIT_TEXT = "EDIT_TEXT";
export const UPDATE_TEXT = "UPDATE_TEXT";

export const GET_ALL_FILES = "GET_ALL_FILES";
export const GET_ALL_FILES_SUCCESS = "GET_ALL_FILES_SUCCESS";
export const GET_ALL_FILES_ERROR = "GET_ALL_FILES_ERROR";

export const UPLOAD_FILE = "UPLOAD_FILE";
export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
export const UPLOAD_FILE_ERROR = "UPLOAD_FILE_ERROR";

export function addText(content) {
  return { type: ADD_TEXT, content: content };
  // you can make api calls to update backend
}

export function removeText(id) {
  return { type: REMOVE_TEXT, id: id };
}

export function editText(content, id) {
  return { type: EDIT_TEXT, content: content, id: id };
}

export function updateText(content, id) {
  return { type: UPDATE_TEXT, content: content, id: id };
}

export function getAllFiles() {
  return { type: GET_ALL_FILES };
}

export function getAllFilesSucess(data) {
  return { type: GET_ALL_FILES_SUCCESS, data };
}

export function getAllFilesError(error) {
  return { type: GET_ALL_FILES_ERROR, errorMsg: error };
}

export function uploadFile(data) {
  return { type: UPLOAD_FILE, file: data };
}

export function uploadFileSucess(data) {
  return { type: UPLOAD_FILE_SUCCESS, data };
}

export function uploadFileError(error) {
  return { type: UPLOAD_FILE_ERROR, errorMsg: error };
}
