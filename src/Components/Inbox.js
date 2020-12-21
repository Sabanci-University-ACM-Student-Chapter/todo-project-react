import React from 'react'
import {useSelector} from 'react-redux'
import InboxHeader from './InboxHeader'
import TodoTab from './TodoTab'

function Inbox() {
    const Todos = useSelector(state => state.Todos) || []

    return (
        <div>
            <InboxHeader title="Inbox"/>
            {Todos.map((value,index) => {
                return <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />
            })}
            
            

        </div>
    )
}

export default Inbox
