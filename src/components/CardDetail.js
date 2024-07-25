// // src/components/CardDetail.js
// import React, { useState, useEffect } from 'react';
// import AddQuestionModal from './AddQuestionModal';
// import { useParams } from 'react-router-dom';

// const getQuestionsFromLocalStorage = (topic) => {
//   const storedData = localStorage.getItem(`questions-${topic}`);
//   return storedData ? JSON.parse(storedData) : { easy: [], medium: [], hard: [] };
// };

// const saveQuestionsToLocalStorage = (topic, questions) => {
//   localStorage.setItem(`questions-${topic}`, JSON.stringify(questions));
// };

// function CardDetail() {
//   const { topic } = useParams();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [questions, setQuestions] = useState({ easy: [], medium: [], hard: [] });

//   useEffect(() => {
//     const loadedQuestions = getQuestionsFromLocalStorage(topic);
//     setQuestions(loadedQuestions);
//   }, [topic]);

//   const openModal = (level) => {
//     setSelectedLevel(level);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   const handleAddQuestion = (level, question) => {
//     const updatedQuestions = { ...questions, [level]: [...questions[level], question] };
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   const handleDeleteQuestion = (level, index) => {
//     const updatedQuestions = { ...questions };
//     updatedQuestions[level].splice(index, 1);
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   return (
//     <div className="container mx-auto p-4">
//   <h1 className="text-3xl font-bold mb-4">{topic}</h1>
//   <div className="flex justify-between space-x-4">
//     {['easy', 'medium', 'hard'].map(level => (
//       <div key={level} className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
//         <h3 className="font-semibold capitalize text-center mb-2">{level}</h3>
//         <ul className="list-disc pl-4 space-y-2">
//           {questions[level].map((q, index) => (
//             <li key={index} className="flex justify-between items-center">
//               <span>{q.name}</span>
//               <div>
//                 <a href={q.link} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">🔗</a>
//                 <button 
//                   onClick={() => handleDeleteQuestion(level, index)} 
//                   className="text-red-500 ml-2"
//                 >
//                   ❌
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <button onClick={() => openModal(level)} className="mt-4 text-blue-500 underline">+ Add More</button>
//       </div>
//     ))}
//   </div>
//   {isModalOpen && <AddQuestionModal closeModal={closeModal} level={selectedLevel} onAddQuestion={handleAddQuestion} />}
// </div>

//   );
// }

// export default CardDetail;


// // src/components/CardDetail.js
// import React, { useState, useEffect } from 'react';
// import AddQuestionModal from './AddQuestionModal';
// import { useParams } from 'react-router-dom';

// const getQuestionsFromLocalStorage = (topic) => {
//   const storedData = localStorage.getItem(`questions-${topic}`);
//   return storedData ? JSON.parse(storedData) : { easy: [], medium: [], hard: [] };
// };

// const saveQuestionsToLocalStorage = (topic, questions) => {
//   localStorage.setItem(`questions-${topic}`, JSON.stringify(questions));
// };

// function CardDetail() {
//   const { topic } = useParams();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [questions, setQuestions] = useState({ easy: [], medium: [], hard: [] });

//   useEffect(() => {
//     const loadedQuestions = getQuestionsFromLocalStorage(topic);
//     setQuestions(loadedQuestions);
//   }, [topic]);

//   const openModal = (level) => {
//     setSelectedLevel(level);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   const handleAddQuestion = (level, question) => {
//     const updatedQuestions = { ...questions, [level]: [...questions[level], question] };
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   const handleDeleteQuestion = (level, index) => {
//     const updatedQuestions = { ...questions };
//     updatedQuestions[level].splice(index, 1);
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-6 text-center text-black">{topic}</h1>
//       <div className="flex justify-between space-x-4">
//         {['easy', 'medium', 'hard'].map((level, idx) => (
//           <div key={level} className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
//             <h3 className={`font-semibold capitalize text-center mb-2 ${idx === 0 ? 'text-green-500' : idx === 1 ? 'text-yellow-500' : 'text-red-500'}`}>
//               {level}
//             </h3>
//             <ul className="list-disc pl-4 space-y-2 mb-4">
//               {questions[level].map((q, index) => (
//                 <li key={index} className="flex justify-between items-center">
//                   <span>{q.name}</span>
//                   <div>
//                     <a href={q.link} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">🔗</a>
//                     <button 
//                       onClick={() => handleDeleteQuestion(level, index)} 
//                       className="text-red-500 ml-2"
//                     >
//                       ❌
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-center">
//               <button 
//                 onClick={() => openModal(level)} 
//                 className={`mt-2 px-4 py-2 rounded text-white ${
//                   idx === 0 ? 'bg-green-500 hover:bg-green-600' : 
//                   idx === 1 ? 'bg-yellow-500 hover:bg-yellow-600' : 
//                   'bg-red-500 hover:bg-red-600'
//                 }`}
//               >
//                 + Add More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {isModalOpen && <AddQuestionModal closeModal={closeModal} level={selectedLevel} onAddQuestion={handleAddQuestion} />}
//     </div>
//   );
// }

// export default CardDetail;


// src/components/CardDetail.js
import React, { useState, useEffect } from 'react';
import AddQuestionModal from './AddQuestionModal';
import { useParams } from 'react-router-dom';

const getQuestionsFromLocalStorage = (topic) => {
  const storedData = localStorage.getItem(`questions-${topic}`);
  return storedData ? JSON.parse(storedData) : { easy: [], medium: [], hard: [] };
};

const saveQuestionsToLocalStorage = (topic, questions) => {
  localStorage.setItem(`questions-${topic}`, JSON.stringify(questions));
};

function CardDetail() {
  const { topic } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [questions, setQuestions] = useState({ easy: [], medium: [], hard: [] });

  useEffect(() => {
    const loadedQuestions = getQuestionsFromLocalStorage(topic);
    setQuestions(loadedQuestions);
  }, [topic]);

  const openModal = (level) => {
    setSelectedLevel(level);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleAddQuestion = (level, question) => {
    const updatedQuestions = { ...questions, [level]: [...questions[level], question] };
    setQuestions(updatedQuestions);
    saveQuestionsToLocalStorage(topic, updatedQuestions);
  };

  const handleDeleteQuestion = (level, index) => {
    const updatedQuestions = { ...questions };
    updatedQuestions[level].splice(index, 1);
    setQuestions(updatedQuestions);
    saveQuestionsToLocalStorage(topic, updatedQuestions);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">{topic}</h1>
      <div className="flex justify-between space-x-4">
        {['easy', 'medium', 'hard'].map((level, idx) => (
          <div key={level} className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
            <h3 className={`font-semibold capitalize text-center mb-2 ${idx === 0 ? 'text-green-500' : idx === 1 ? 'text-yellow-500' : 'text-red-500'}`}>
              {level}
            </h3>
            <ul className="space-y-4 mb-4">
              {questions[level].map((q, index) => (
                <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{q.name}</span>
                    <div>
                      <a href={q.link} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">🔗</a>
                      <button 
                        onClick={() => handleDeleteQuestion(level, index)} 
                        className="text-red-500 ml-2"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{q.hint || 'No hint provided.'}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button 
                onClick={() => openModal(level)} 
                className={`mt-2 px-4 py-2 rounded text-white ${
                  idx === 0 ? 'bg-green-500 hover:bg-green-600' : 
                  idx === 1 ? 'bg-yellow-500 hover:bg-yellow-600' : 
                  'bg-red-500 hover:bg-red-600'
                }`}
              >
                + Add More
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <AddQuestionModal closeModal={closeModal} level={selectedLevel} onAddQuestion={handleAddQuestion} />}
    </div>
  );
}

export default CardDetail;
