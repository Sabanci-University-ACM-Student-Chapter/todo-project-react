import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import AddProject from './AddProject.js';
import ControlPanel from './ControlPanel.js'
import SubTopic from './SubTopic.js'




export default function SideBar() {

    const dispatch = useDispatch()
    const projects = useSelector(state => state.Projects)



    useEffect(() => {
        document.querySelector(".controlPanel").addEventListener('scroll', () => {
            let x = document.querySelector(".controlPanel").scrollTop;
            let height =document.querySelector(".controlPanel").scrollHeight 
            document.body.style.setProperty('--scroll',(10*x)/height);
        });
      });
    return (
        <div className="SideBar" >
            <h1 className="SideBarTitle"> To-Do App </h1>
            <div className="SideBarScroll"></div>
            <div className="controlPanel">
                <ControlPanel />
                {projects.map((value,index) => {
                return <SubTopic key={index} id={value.id} title={value.title} />
            })}
            </div>
            <AddProject onClick={() => dispatch({type:'ADD_TODOS'})}/>
        </div>
    )
}
