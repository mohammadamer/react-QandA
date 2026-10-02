import React from 'react';
import { Page } from '../PageTitle/Page';
import { useParams } from 'react-router-dom';
import { getQuestion, postAnswer } from '../QuestionsData';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AnswerList } from '../Answers/AnswerList';
import { Fieldset, FieldContainer, FieldLabel, FieldTextArea, FormButtonContainer, PrimaryButton, FieldError, SubmissionSuccess } from '../Styles';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { AppState, gettingQuestionAction, gotQuestionAction } from '../Store';

type FormData = {
    content: string;
};

export const QuestionPage = () => {
    const dispatch = useDispatch();
    const question = useSelector((state: AppState) => state.questions.viewing);

    const [successfullySubmitted, setSuccessfullySubmitted] = React.useState(false);

    const { questionId } = useParams();

    React.useEffect(() => {
        const doGetQuestion = async (questionId: number) => {

            dispatch(gettingQuestionAction());
            const foundQuestion = await getQuestion(questionId);
            dispatch(gotQuestionAction(foundQuestion));
        };

        if (questionId) {
            doGetQuestion(Number(questionId));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionId]);

    const { register, handleSubmit, formState } = useForm<FormData>({ mode: 'onBlur' });
    const { errors } = formState;

    const submitForm = async (data: FormData) => {
        const result = await postAnswer({
            questionId: question!.questionId,
            content: data.content,
            userName: 'Fred',
            created: new Date(),
        });
        setSuccessfullySubmitted(result ? true : false);
    };

    return (
        <Page>
            <article className="question-detail">
                <h1 className="detail-title">
                    {question === null ? '' : question.title}
                </h1>
                {question !== null && (
                    <React.Fragment>
                        <p className="detail-content">
                            {question.content}
                        </p>
                        <div className="metadata">
                            {`Asked by ${question.userName} on
                            ${question.created.toLocaleDateString()} 
                            ${question.created.toLocaleTimeString()}`}
                        </div>
                        <AnswerList data={question.answers} />
                        <form onSubmit={handleSubmit(submitForm)} css={css`margin-top: 28px;`}>
                            <Fieldset
                                disabled={formState.isSubmitting || successfullySubmitted}
                            >
                                <FieldContainer>
                                    <FieldLabel htmlFor="content">
                                        Your Answer
                                    </FieldLabel>
                                    <FieldTextArea
                                        {...register('content', { required: true, minLength: 50 })}
                                        id="content"
                                        name="content"
                                    />
                                    {errors.content && errors.content.type === 'required' && (
                                        <FieldError>You must enter the answer</FieldError>
                                    )}
                                    {errors.content && errors.content.type === 'minLength' && (
                                        <FieldError>
                                            The answer must be at least 50 characters
                                        </FieldError>
                                    )}
                                </FieldContainer>
                                <FormButtonContainer>
                                    <PrimaryButton className="primary-button" type="submit">
                                        Submit Your Answer
                                    </PrimaryButton>
                                </FormButtonContainer>
                                {successfullySubmitted && (
                                    <SubmissionSuccess>
                                        Your answer was successfully submitted
                                    </SubmissionSuccess>
                                )}
                            </Fieldset>
                        </form>
                    </React.Fragment>
                )}
            </article>
        </Page>
    );
};

// Important note
// When using triple equals (===), we are checking for strict equality. This means
// both the type and the value we are comparing have to be the same. When using
// a double equals (==), the type isn't checked. Generally, it is good practice to
// use the triple equals (===) to perform a strict equality check.

// Important note
// In React, a component can only return a single element. This rule applies to
// conditional rendering logic where there can be only a single parent React
// element being rendered. React Fragment allows us to work around this rule
// because we can nest multiple elements within it without creating a DOM node.