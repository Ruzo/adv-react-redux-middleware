export default function({dispatch}){
  return next => action => {
    if (!action.data || !action.data.then) return next(action);

    action.data.then((response) => {
      let newAction = { type: action.type, data: response.data };
      dispatch(newAction);
    });
  };
};