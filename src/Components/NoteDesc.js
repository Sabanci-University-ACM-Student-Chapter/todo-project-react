import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

// Component for detail of todos.
// You can add extra detail for your todo here.

function NoteDesc(props) {
    const device = useSelector(state => state.ScreenSize)
    const dispatch = useDispatch()
    useEffect(() => { // height information for customized scroll bar.
        document.querySelector(".noteArea").addEventListener('scroll', () => {
            let x = document.querySelector(".noteArea").scrollTop;
            let height =document.querySelector(".noteArea").scrollHeight 
            document.body.style.setProperty('--scrollnote',(10*x)/height);
        });
      });

    return (
        <div className="NoteDesc"> {/* the below code controls if mode is edit, you can edit detail, else you cannot. */}
            {props.mode === 'standart' ? <textarea className="noteArea" rows="3" cols="3" placeholder="Write here your notes!" value={props.actual.detail} /> :  <textarea className="noteArea" rows="3" cols="3" placeholder="Write here your notes!" defaultValue={props.actual.detail} onChange={(e) => dispatch({type:'UPDATE_DETAIL', text:e.target.value ,self_id: props.actual.self_id})} />}
            {device === 'Desktop' ? <div className="NoteScroll"></div> : null} {/* to remove scroll bar at Mobile*/}
        </div>
    )
}

export default NoteDesc
