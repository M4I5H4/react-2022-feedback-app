import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] =
    useState(FeedbackData);
  //delete function is here because this is where the feedback data is (see prop drilling)
  const deleteFeedback = (id) => {
    if (
      window.confirm(
        'Are you sure you want to delete?'
      )
    ) {
//sets array to the feedback list minus the item deleted
      setFeedback(
        feedback.filter((item) => item.id !== id)
      );
    }
  };
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
