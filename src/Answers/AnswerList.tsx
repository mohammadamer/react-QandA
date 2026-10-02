import React from 'react';
import { AnswerData } from '../QuestionsData';
import { Answer } from './Answer';
interface Props {
    data: AnswerData[];
}

export const AnswerList = ({ data }: Props) => (
    <ul className="answer-list">
        {data.map(answer => (
            <li className="answer-row"
                key={answer.answerId}>
                <Answer data={answer} />
            </li>
        ))}
    </ul>
);