const NameReducer = (counti=16,action) => {
    switch(action.type){
        case 'INCREMENT':
            return counti + 1;
        case 'DECREMENT':
            return counti - 1
        default:
            return counti
    }
}

export default NameReducer