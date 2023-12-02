import './Reviews.css';

function Reviews() {
    return (
        <div className="reviewsbox">
            <div className="reviews-nav">
                <div className="reviews-nav-box">Reviews</div>
            </div>
            <div className="reviewsbox-reviews">
                <div className="reviewsbox-reviews-item">
                    <p className="username">Username:</p>
                    <p className="comment">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora eos deserunt labore cupiditate neque excepturi magni, praesentium nulla aspernatur?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;