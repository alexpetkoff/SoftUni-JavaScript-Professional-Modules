import { useContext, useEffect, useState } from 'react';
import './Reviews.css';
import AuthContext from '../../contexts/AuthContext';
import AddReview from './AddReview';
import { useParams } from 'react-router-dom';

function Reviews() {
    const { auth } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getAllReviews = async () => {
        try {
            const response = await fetch('http://localhost:3030/data/comments', {
                method: 'GET',
                headers: { 'Content-type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }

            const result = await response.json();

            const filteredReviews = result.filter((review) => review.productId === id);

            setReviews(filteredReviews);
        } catch (error) {
            console.error('Error fetching reviews:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllReviews();
    }, []);

    const handleReviewSubmit = async () => {
        await getAllReviews();
    };

    return (
        <div className="reviewsbox">
            <div className="reviews-nav">
                <div className="reviews-nav-box">Reviews</div>
            </div>
            {loading
                ? (<p>Loading reviews...</p>)
                : (
                    <div className="reviewsbox-reviews">
                        {
                            reviews.length === 0
                                ? (<h1>No reviews for this product</h1>)
                                : reviews.map((review) => (
                                    <div key={review._id} className="reviewsbox-reviews-item">
                                        <p className="username">{review.username} says:</p>
                                        <p className="comment">{review.review}</p>
                                    </div>
                                ))
                        }
                    </div>
                )
            }
            {auth && auth.accessToken && <AddReview onReviewSubmit={handleReviewSubmit} />}
        </div>
    );
}

export default Reviews;
