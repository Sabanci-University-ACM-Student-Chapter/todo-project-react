import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import InboxHeader from './InboxHeader'
import TodoTab from './TodoTab'

// a page component for Upcoming labeled todos.

function Upcoming() {
    const Todos = useSelector(state => state.Todos.filter(todo => todo.category === 'Upcoming'))
    useEffect(() => {
        document.querySelector("#upcoming").addEventListener('scroll', () => {
            let x = document.querySelector("#upcoming").scrollTop;
            let height =document.querySelector("#upcoming").scrollHeight 
            document.body.style.setProperty('--upcomingscroll',(10*x)/height);
        });
      });
    return (
        <div>
            <InboxHeader title="Upcoming" />
            <div className="Project">
                <div className="ProjectTabs" id="upcoming">
            {Todos.map((value,index) => {
                return <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />
            })}
            </div>
            <div className="UpcomingScroll"></div>
            </div>
            

        </div>
    )
}

export default Upcoming
