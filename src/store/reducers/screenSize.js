//  a reducer to determine your device has enough screen size to application.
// it is used to change forms of components for mobile and desktop.

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