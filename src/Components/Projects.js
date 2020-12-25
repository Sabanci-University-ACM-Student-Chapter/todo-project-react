import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import InboxHeader from './InboxHeader';
import TodoTab from './TodoTab'
import Icon from './Icon'

function Projects() {
    const Projects = useSelector(state => state.Projects)
    const todos = useSelector(state => state.Todos)
    const dispatch = useDispatch()

    useEffect(() => { // height information for customized scroll bar.
        document.querySelector(".ProjectTabs").addEventListener('scroll', () => {
            let x = document.querySelector(".ProjectTabs").scrollTop;
            let height =document.querySelector(".ProjectTabs").scrollHeight 
            document.body.style.setProperty('--projectscroll',(10*x)/height);
        });
      });


    return (
        <div>
            <InboxHeader title="Projects"/>
            <div className="Project">
            <div className="ProjectTabs">
            {Projects.map((value2,index) => { // this part renders projects
                return (
                    
                    <div key={index} className="ProjectTab">
                        <div className="ProjectName">
                            <h2 > {value2.title} </h2>
                            <Icon class="icon" tag="Trash" onClick={() => { //this part deletes the project with all its todos.
                                let willRemoved = todos.filter(todo => todo.project_name === value2.title)
                                let i = 0 // when a todo removed, other todos synchronized again and again and their ids diminish.
                                willRemoved.forEach(element => {
                                    element.self_id -= i // instead of takes todos from redux again and again, this part returns reduced ids to the reducer.
                                    dispatch({type:'REMOVE_TODO', self_id: element.self_id})
                                    i +=1; 
                                });
                                
                                dispatch({type:'REMOVE_PROJECT',id:value2.id}) // deletes the projects
                            }} />
                        </div> {/* the code below, filters todos by projects and renders them. */}
                        {todos.filter(todo => todo.project_name === value2.title).map((value,index) => <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />)}
                    </div>
                    
                )   
            })}
            </div>
            <div className="ProjectScroll"></div>
            </div>
            
        </div>
        
    )
}

export default Projects
