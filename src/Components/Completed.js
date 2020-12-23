import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import InboxHeader from './InboxHeader'
import TodoTab from './TodoTab'

function Completed() {
    const Todos = useSelector(state => state.Todos.filter(todo => todo.isCompleted === true))
    useEffect(() => {
        document.querySelector("#completed").addEventListener('scroll', () => {
            let x = document.querySelector("#completed").scrollTop;
            let height =document.querySelector("#completed").scrollHeight 
            document.body.style.setProperty('--completedscroll',(10*x)/height);
        });
      });

    return (
        <div>
            <InboxHeader title="Completed" />
            <div className="Project">
                <div className="ProjectTabs" id="completed">
            {Todos.map((value,index) => {
                return <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />
            })}
            </div>
            <div className="CompletedScroll"></div>
            </div>
            
            

        </div>
    )
}

export default Completed
