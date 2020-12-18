import React,{useState} from 'react'
import PageIcon from './PageIcon'

function PageControl() {
    const [mode,setMode] = useState('standart');

    const changeMode = () => {
        console.log('eren')
        if(mode ==='edit') {
            setMode('standart')
        }
        else{
            setMode('edit')
        }
        console.log("deneme")
    }

    if(mode === 'edit'){
        return (
        <div className="PageControl">
            <PageIcon tag="Done" onClick={changeMode} color="#a8ffb9" />
            <PageIcon tag="Cancel" color="#FFE6E2" />
        </div>
        )}
    else {
        return (
            <div className="PageControl">
                <PageIcon tag="Edit" onClick={changeMode} color="#fef791" />
                <PageIcon tag="Label" color="#fba960" />
                <PageIcon tag="Remove" color="#b077fc" />
            </div>
        )
    }
}

export default PageControl
