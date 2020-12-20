import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

function NoteDesc(props) {

    const dispatch = useDispatch()
    useEffect(() => {
        document.querySelector(".noteArea").addEventListener('scroll', () => {
            let x = document.querySelector(".noteArea").scrollTop;
            let height =document.querySelector(".noteArea").scrollHeight 
            document.body.style.setProperty('--scrollnote',(10*x)/height);
        });
      });

    return (
        <div className="NoteDesc">
            {props.mode === 'standart' ? <textarea className="noteArea" rows="3" cols="3" placeholder="Write here your notes!" value={props.actual.detail} /> :  <textarea className="noteArea" rows="3" cols="3" placeholder="Write here your notes!" defaultValue={props.actual.detail} onChange={(e) => dispatch({type:'UPDATE_DETAIL', text:e.target.value ,self_id: props.actual.self_id})} />}
            <div className="NoteScroll"></div>
        </div>
    )
}

export default NoteDesc
