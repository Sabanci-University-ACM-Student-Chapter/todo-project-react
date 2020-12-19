import React from 'react'
import {useSelector} from 'react-redux'
import InboxHeader from './InboxHeader'
import TodoTab from './TodoTab'

function Today() {
    const Todos = useSelector(state => state.Todos.filter(todo => todo.category === 'Today'))

    return (
        <div>
            <InboxHeader title="Today" />
            {Todos.map((value,index) => {
                return <TodoTab key={index} self_id={value.self_id} description={value.description} date={value.date} isCompleted={value.isCompleted} />
            })}
            
            

        </div>
    )
}

export default Today
