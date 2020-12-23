import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import InboxHeader from './InboxHeader'
import TodoTab from './TodoTab'

function Today() {
    const Todos = useSelector(state => state.Todos.filter(todo => todo.category === 'Today'))
    useEffect(() => {
        document.querySelector("#today").addEventListener('scroll', () => {
            let x = document.querySelector("#today").scrollTop;
            let height =document.querySelector("#today").scrollHeight 
            document.body.style.setProperty('--todayscroll',(10*x)/height);
        });
      });

    return (
        <div>
            <InboxHeader title="Today" />
            <div className="Project">
                <div className="ProjectTabs" id="today">
                    {Todos.map((value,index) => {
                        return <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />
                    })}
                </div>
                <div className="TodayScroll"></div>
        </div>
            

        </div>
    )
}

export default Today
