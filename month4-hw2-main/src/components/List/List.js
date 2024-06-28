import React from 'react';
import classes from './list.module.css'


const List = ({tasks}) => {
    return (
        <div className={classes.result}>
            {tasks.map((task)=><li key={task.id}>{task.task}</li>)}
        </div>
    );
};

export default List;