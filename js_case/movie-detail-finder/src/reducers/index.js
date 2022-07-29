const fetchMovieReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  return {
    movie: fetchMovieReducer(state, action),
  };
};

export default rootReducer;
