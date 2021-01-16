const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "@ID/getUsers":
      const { users } = action;
      return [...users];

    default:
      return state;
  }
};

export default usersReducer;
