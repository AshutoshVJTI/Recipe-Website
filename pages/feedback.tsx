import { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Use feedback, rating and email values to submit form to backend or API
    console.log(`Feedback: ${feedback}, Rating: ${rating}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="feedback">
        Feedback:
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="rating">
        Rating:
        <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Feedback;