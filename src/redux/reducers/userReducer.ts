const initialState = {
  isLogged: false,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
}
