import { ADD_TEXT, REMOVE_TEXT, EDIT_TEXT, UPDATE_TEXT, GET_ALL_FILES_SUCCESS } from '../actions/actions';

const initialState = {
  texts: [],
  editText: {
    id: null,
    content: null
  },
  files: []
};

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TEXT:
      return {
        texts: [
          ...state.texts,
          {
            content: action.content,
            lastUpdated: formatDate(new Date())
          }
        ]
      };
    case REMOVE_TEXT:
      const tes = state.texts.splice(action.id, 1)
      console.log(tes)
      return {
        texts: state.texts.filter((index) => index !== action.id)
      };
    case EDIT_TEXT:
      return {
        ...state,
        editText: {
          id: action.id,
          content: action.content
        }
      }
    case UPDATE_TEXT:
      const ele = state.texts[action.id];
      ele.content = action.content;
      return {
        texts: [
          ...state.texts,
        ]
      }
    case GET_ALL_FILES_SUCCESS:
      return {
        ...state,
        files: action.data
      }
    default:
      return state;
  };
}

export default rootReducer;