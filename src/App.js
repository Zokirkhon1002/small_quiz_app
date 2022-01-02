import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Uzbekistan?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Seoul', isCorrect: false },
				{ answerText: 'Tashkent', isCorrect: true },
				{ answerText: 'Almata', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Najot Ta\'lim?',
			answerOptions: [
				{ answerText: 'Odilbek Mirzayev', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Temurbek Adhamov', isCorrect: true },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many parts of Masnaviy Ma\'naviy?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: true },
				{ answerText: '7', isCorrect: false },
			],
		},
	];

	const [curQuestion, setCurQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [score, setScore] = useState(0)
	const [cliked, setClicked] = useState(false)
	const hadnleAnswerButtonClick = (isCorrect) => {
		if(isCorrect){
			setScore(score+1)
		}
		const nextQuestion = curQuestion + 1;
		if(nextQuestion < questions.length){
			setCurQuestion(nextQuestion)
			setShowScore(false)
		}
		else {
			alert(`you have reached the end of the quiz`)
			setShowScore(true)
		}
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {curQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[curQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[curQuestion].answerOptions.map((a,idx) => (
							<button className={`${score}`} key={idx} onClick={() => hadnleAnswerButtonClick(a.isCorrect)}>{a.answerText}</button>
						) )}
					</div>
				</>
			)}
		</div>
	);
}
