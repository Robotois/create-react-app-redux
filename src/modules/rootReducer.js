
export default {

};

export const rootReducer = appReducer => (state, action) => {
    return appReducer(state, action);
};
