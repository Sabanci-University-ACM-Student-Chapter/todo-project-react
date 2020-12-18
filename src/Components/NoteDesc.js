import React, {useEffect} from 'react'

function NoteDesc() {
    useEffect(() => {
        document.querySelector(".noteArea").addEventListener('scroll', () => {
            let x = document.querySelector(".noteArea").scrollTop;
            let height =document.querySelector(".noteArea").scrollHeight 
            document.body.style.setProperty('--scrollnote',(10*x)/height);
        });
      });

    return (
        <div className="NoteDesc">
            <textarea className="noteArea" rows="3" cols="3" placeholder="Write here your notes!"/>
            <div className="NoteScroll"></div>
        </div>
    )
}

export default NoteDesc
