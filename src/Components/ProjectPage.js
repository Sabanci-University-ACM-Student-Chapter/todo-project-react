import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import NoteDesc from './NoteDesc'
import PageControl from './PageControl'
import PageHeader from './PageHeader'

function ProjectPage() {

    const [mode,setMode] = useState('standart');
    const [label,setLabel] = useState('standart');


    const changeMode = () => {
        if(mode ==='edit') {
            setMode('standart')
        }
        else{
            setMode('edit')
        }
    }
    const changeLabel = () => {
        if(label ==='change') {
            setLabel('standart')
        }
        else{
            setLabel('change')
        }
    }

    const actual = useSelector(state => state.Actual)
    return (
        <div className="ProjectPage">
            <PageHeader changeLabel2={changeLabel} label={label} actual={actual} />
            <NoteDesc mode={mode} actual={actual} />
            <PageControl changeLabel={changeLabel} changeMode={changeMode} mode={mode} actual={actual} />
        </div>
    )
}

export default ProjectPage
