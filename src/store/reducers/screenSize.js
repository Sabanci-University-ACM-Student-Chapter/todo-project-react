

const screenSizeReducer = (state="Desktop",action) => {
    switch(action.type){
        case 'CONTROL_DEVICE':
            if(window.innerWidth < 1070){
                return 'Mobile'
            }
            else {
                return 'Desktop'
            }
        default:
            if(window.innerWidth < 1070){
                return 'Mobile'
            }
            else {
                return 'Desktop'
            }
}
}

export default screenSizeReducer