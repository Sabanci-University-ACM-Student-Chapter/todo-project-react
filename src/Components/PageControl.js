import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import PageIcon from './PageIcon'



function PageControl(props) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.Todos)


    if(props.mode === 'edit'){
        return (
        <div className="PageControl">
            <PageIcon tag="Done" customClickEvent={props.changeMode} color="#a8ffb9" />
            <PageIcon tag="Cancel" color="#FFE6E2" />
        </div>
        )}
    else {
        return (
            <div className="PageControl">
                <PageIcon tag="Edit" customClickEvent={props.changeMode} color="#fef791" />
                <PageIcon tag="Label" color="#fba960" />
                <PageIcon tag="Remove" color="#b077fc" customClickEvent={() => {
                    dispatch({type:'REMOVE_TODO', self_id:props.actual.self_id,todos:todos});
                    dispatch({type:'CHANGE_ACTUAL',self_id:props.actual.self_id - 1, todos:todos})
                }}/>
            </div>
        )
    }
}

export default PageControl
