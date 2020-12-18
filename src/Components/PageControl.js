import React,{useState} from 'react'
import PageIcon from './PageIcon'



function PageControl() {
    const [mode,setMode] = useState('standart');

    const changeMode = () => {
        if(mode ==='edit') {
            setMode('standart')
        }
        else{
            setMode('edit')
        }
    }

    if(mode === 'edit'){
        return (
        <div className="PageControl">
            <PageIcon tag="Done" customClickEvent={changeMode} color="#a8ffb9" />
            <PageIcon tag="Cancel" color="#FFE6E2" />
        </div>
        )}
    else {
        return (
            <div className="PageControl">
                <PageIcon tag="Edit" customClickEvent={changeMode} color="#fef791" />
                <PageIcon tag="Label" color="#fba960" />
                <PageIcon tag="Remove" color="#b077fc" />
            </div>
        )
    }
}

export default PageControl
