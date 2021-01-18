export const chefServicesReducer = (state = [], action) => {
  switch (action.type) {
    case "@ID/getChefServices":
      const { services } = action;
      return [...services];

    default:
      return state;
  }
};

export const costumerServicesReducer = (state = [], action) => {
  switch (action.type) {
    case "@ID/getCostumerServices":
      const { services } = action;
      return [...services];

    default:
      return state;
  }
};
