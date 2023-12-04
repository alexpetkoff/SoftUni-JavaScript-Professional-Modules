import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';

function AddReview({onReviewSubmit}) {
    const [reviewText, setReviewText] = useState('');
    const { auth } = useContext(AuthContext);
    const { id } = useParams();
    
    const handleChange = (event) => {
        const inputText = event.target.value;

        if(inputText.length <= 255) {
            setReviewText(inputText);
        }

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
                
            const response = await fetch('http://localhost:3030/data/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': auth.accessToken
                },
                body: JSON.stringify({
                    username: auth.username,
                    review: reviewText,
                    productId: id,
                })
            });
        
            if (!response.ok) {
                throw new Error('Failed to submit your review');
            }

            onReviewSubmit();
            setReviewText('');
        } catch (error) {
            console.error('Error submitting review:', error.message);
        }
    };

    return (
        <div className="reviewbox-addreview">
            <hr />
            <form onSubmit={handleSubmit}>
                <h2>Send a review:</h2>
                <textarea
                    rows={6}
                    cols={50}
                    maxLength={255}
                    type='text'
                    name='review'
                    value={reviewText}  // Make it a controlled component by setting the value
                    onChange={handleChange}  // Handle changes to update the state
                />
                <div>
                    <p>Remaining characters: {255 - reviewText.length}</p>
                    <button type="submit">Send Review</button>
                </div>
            </form>
        </div>
    );
}

export default AddReview;
