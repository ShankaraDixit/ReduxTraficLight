// state here is just the piece of the application state that is
// concerned with this reducer

export default (state = 'red', action) => {
  switch (action.type) {
    case 'SELECTED_COLOR':
	console.log("selected ", action.payload);      
	return action.payload; 
      break;
    default:
      return state;
  }
}
