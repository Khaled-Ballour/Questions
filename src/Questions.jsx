import React from 'react';
import Question from './Question';

const Questions = (props) => {
  const { questions } = props;
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Questions;
