import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import InboxHeader from './InboxHeader'
import TodoTab from './TodoTab'

function Inbox() {
    const Todos = useSelector(state => state.Todos) || []
    useEffect(() => {
        document.querySelector("#inbox").addEventListener('scroll', () => {
            let x = document.querySelector("#inbox").scrollTop;
            let height =document.querySelector("#inbox").scrollHeight 
            document.body.style.setProperty('--inboxscroll',(10*x)/height);
        });
      });
    return (
        <div>
            <InboxHeader title="Inbox"/>
            <div className="Project">
                <div className="ProjectTabs" id="inbox">
            {Todos.map((value,index) => {
                return <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />
            })}
            </div>
            <div className="InboxScroll"></div>
            </div>
        </div>
    )
}

export default Inbox
