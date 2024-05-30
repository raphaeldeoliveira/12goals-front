import React from "react";
import { useState, useEffect } from "react";
import "../styles/goal.scss"
import { IoIosDoneAll } from "react-icons/io";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";

export default function Goal(props) {

    const [goalsLengt, setGoalsLength] = useState(0)
    const [goalIncrement, setGoalIncrement] = useState(0)

    useEffect(() => {
        setGoalIncrement(100 / props.goals.length)
    }, [props.goals.length])
    
    useEffect(() => {
        let totalLength = 0;
        props.goals.forEach(goal => {
            if (goal.done) {
                totalLength += goalIncrement;
            }
        });
        setGoalsLength(totalLength);
    }, [props.goals, goalIncrement]);

    function loadGoals() {
        return props.goals.length == 0 ? (
            <div>No Goals</div>
        ) : (
            props.goals.map((goal) => {
                <div>
                    <div>{goal.goal}</div>
                    <div>
                        <input type="checkbox" checked={goal.done}/>
                    </div>
                </div>
            })
        )
    }
    
    function loadGoals() {
        return props.goals.length === 0 ? (
            <div>No Goals!</div>
        ) : (
            props.goals.map((goal, index) => (
                <div className="goal_card" key={index}>
                    <div><span>{goal.goal}</span></div>
                    <div>
                        <input type="checkbox" checked={goal.done} />
                    </div>
                </div>
            ))
        );
    }
    


    return (
        <div className="goal__card">
            <div 
                style={{ backgroundColor: props.color }}
                className="card__title"
            >{props.goalTitle}</div>
            <div>
                <div className="card__todo_and_done">
                    <div
                        style={{ backgroundColor: props.color }}
                    >To Do</div>
                    <div
                        style={{ backgroundColor: props.color }}
                    >{<IoIosDoneAll size={25} />}</div>
                </div>
                {loadGoals()}
                <div className="card__progress_container">
                    <div>
                        <div>Progress</div>
                        <div>
                            <div style={{ width: `${goalsLengt}%` }}></div>
                        </div>
                    </div>
                </div>
                <div className="card__metrics_container">
                    <div>To Do Count</div>
                    <div>{props.goals.length}</div>
                    <div>{Math.trunc(goalsLengt)}%</div>
                </div>
                <div className="card__edit_goals">
                    <MdEdit className="icon--edit" />
                    <MdDelete className="icon--delete" />
                    <MdAdd className="icon--add" />
                </div>
            </div>

        </div>
    )
}