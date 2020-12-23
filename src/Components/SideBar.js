import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import AddProject from './AddProject.js';
import ControlPanel from './ControlPanel.js'
import SubTopic from './SubTopic.js'




export default function SideBar() {

    const dispatch = useDispatch()
    const projects = useSelector(state => state.Projects) || []



    useEffect(() => {
        document.querySelector(".todos").addEventListener('scroll', () => {
            let x = document.querySelector(".todos").scrollTop;
            let height =document.querySelector(".todos").scrollHeight 
            document.body.style.setProperty('--scroll',(10*x)/height);
        });
      });
    return (
        <div className="SideBar" >
            <h1 className="SideBarTitle"> To-Do App </h1>
            <div className="controlPanel">
                <ControlPanel />
                <div className="todos">
                    {projects.map((value,index) => {
                    return <SubTopic key={index} id={value.id} title={value.title} />
                })}
                </div>
                <div className="SideBarScroll"></div>
            </div>
            <AddProject onClick={() => dispatch({type:'ADD_TODOS'})}/>
        </div>
    )
}
