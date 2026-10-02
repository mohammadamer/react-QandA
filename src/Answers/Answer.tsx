import React from 'react';
import { AnswerData } from '../QuestionsData';
interface Props {
    data: AnswerData;
}

export const Answer = ({ data }: Props) => (
    <article>
        <p className="answer-content">
            {data.content}
        </p>
        <div className="metadata">
            {`Answered by ${data.userName} on
                ${data.created.toLocaleDateString()}
                ${data.created.toLocaleTimeString()}`}
        </div>
    </article>
);