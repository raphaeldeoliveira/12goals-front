import React from "react";
import { useState } from "react";
import Goal from "./Goal";

export default function GoalsContainer() {

    /* fetch() -> pra pegar os dados da API
    filtra as metas por type (mes, dia, ano, week) e coloca nos state */

    const [monthGoals, setMonthGoals] = useState([
        {
            goal: "Ler 12 livros",
            done: false
        },
        {
            goal: "Passar no concurso",
            done: false
        },
        {
            goal: "Passar no concurso",
            done: true
        },
        {
            goal: "Passar no concurso",
            done: true
        }
    ])
    const [weeksGoals, setWeeksGoals] = useState([
        {
            goal: "Ler o livro codigo da vincipopo",
            done: false
        },
        {
            goal: "Passar no concurso",
            done: true
        },
        {
            goal: "Passar no concurso",
            done: true
        },
        {
            goal: "Passar no concurso",
            done: true
        },
        {
            goal: "Passar no concurso",
            done: true
        },
        {
            goal: "Passar no concurso",
            done: true
        },
        {
            goal: "Passar no concurso",
            done: true
        },
        {
            goal: "Passar no concurso",
            done: true
        }
    ])
    const [daysGoals, setDaysGoals] = useState([
        {
            goal: "Cortar a grama",
            done: false
        },
        {
            goal: "Cortar a grama",
            done: false
        },
        {
            goal: "Cortar a grama",
            done: false
        },
        {
            goal: "Cortar a grama",
            done: false
        },
        {
            goal: "Cortar a grama",
            done: false
        },
        {
            goal: "Cortar a grama",
            done: false
        },
        {
            goal: "Cortar a grama",
            done: true
        },
    ])
    const [todayGoals, setTodayGoals] = useState([
        {
            goal: "Ir no mercado",
            done: false
        },
        {
            goal: "Cortar a grama",
            done: true
        }
    ])

    return (

        <div className="goals__container">
            <Goal 
                goalTitle="12 months"
                color="#84ade9"
                goals={monthGoals}
            />
            <Goal 
                goalTitle="12 weeks"
                color="#a361c9"
                goals={weeksGoals}
            />
            <Goal 
                goalTitle="12 days"
                color="#eb566e"
                goals={daysGoals}
            />
            <Goal 
                goalTitle="today"
                color="#5ae65a"
                goals={todayGoals}
            />
        </div>
        
    )
}