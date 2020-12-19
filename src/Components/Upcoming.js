import React from 'react'
import {useSelector} from 'react-redux'
import InboxHeader from './InboxHeader'
import TodoTab from './TodoTab'

function Upcoming() {
    const Todos = useSelector(state => state.Todos.filter(todo => todo.category === 'Upcoming'))

    return (
        <div>
            <InboxHeader title="Upcoming" />
            {Todos.map((value,index) => {
                return <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />
            })}
            
            

        </div>
    )
}

export default Upcoming
