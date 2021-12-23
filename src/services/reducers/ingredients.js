import {
  GET_ITEMS_PENDING,
  GET_ITEMS_FULFILLED,
  GET_ITEMS_ERROR,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from '../actions/ingredients';

const initialState = {
  isLoading: false,
  error: null,
  bun: null,
  items: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ITEMS_PENDING: {
      return { ...state, isLoading: true };
    }
    case GET_ITEMS_FULFILLED: {
      return {
        ...state,
        items: action.payload,
        error: null,
        isLoading: false,
      };
    }
    case GET_ITEMS_ERROR: {
      return { ...initialState, error: action.payload };
    }
    case INCREMENT_ITEM: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((item) => (item._id === id
          ? { ...item, count: item.count ? item.count + 1 : 1 }
          : item
        )),
      };
    }
    case DECREMENT_ITEM: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((item) => (item._id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : undefined }
          : item
        )),
      };
    }
    default:
      return state;
  }
};
