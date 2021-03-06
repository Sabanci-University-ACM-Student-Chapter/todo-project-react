import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import PageIcon from './PageIcon'



function PageControl(props) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.Todos)

    const saveDetail = () => { // To save changes at details.
        dispatch({type: 'SAVE_DETAIL',self_id:props.actual.self_id})
        props.changeMode()
        dispatch({type:'CHANGE_ACTUAL', self_id: props.actual.self_id, todos:todos})
    }
    
    const cancelDetail = () => { // to cancel changes at details.
        dispatch({type: 'CANCEL_DETAIL',self_id:props.actual.self_id})
        props.changeMode()
        dispatch({type:'CHANGE_ACTUAL', self_id: props.actual.self_id, todos:todos})
        
    }

    if(props.mode === 'edit'){ // this condition controls buttons according to mode
        return (
        <div className="PageControl">
            <PageIcon tag="Done" customClickEvent={saveDetail} color="#a8ffb9" />
            <PageIcon tag="Cancel"customClickEvent={cancelDetail} color="#FFE6E2" />
        </div>
        )}
    else {
        return (
            <div className="PageControl">
                <PageIcon tag="Edit" customClickEvent={props.changeMode} color="#fef791" />
                <PageIcon tag="Label" customClickEvent={props.changeLabel} color="#fba960" />
                <PageIcon tag="Remove" color="#b077fc" customClickEvent={() => { // remove current todo and shift to previous one.
                    dispatch({type:'REMOVE_TODO', self_id:props.actual.self_id,todos:todos});
                    dispatch({type:'CHANGE_ACTUAL',self_id:props.actual.self_id - 1, todos:todos})
                }}/>
            </div>
        )
    }
}

export default PageControl
