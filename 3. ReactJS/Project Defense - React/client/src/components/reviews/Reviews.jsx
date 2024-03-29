import { useContext, useEffect, useState } from "react";
import "./Reviews.css";
import AuthContext from "../../contexts/AuthContext";
import AddReview from "./AddReview";
import { useParams } from "react-router-dom";

function Reviews() {
  const { auth } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editedReviewText, setEditedReviewText] = useState("");

  const { id } = useParams();

  const getAllReviews = async () => {
    try {
      const response = await fetch("http://localhost:3030/data/comments", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const result = await response.json();

      const filteredReviews = result.filter(
        (review) => review.productId === id
      );

      setReviews(filteredReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error.message);
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

  const startEdit = (reviewId) => {
    const reviewToEdit = reviews.find((review) => review._id === reviewId);
    setEditingReviewId(reviewId);
    setEditedReviewText(reviewToEdit.review);
  };

  const saveEditedReview = async (reviewId) => {
    try {
      const response = await fetch(
        `http://localhost:3030/data/comments/${reviewId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": auth.accessToken,
          },
          body: JSON.stringify({
            username: auth.username,
            review: editedReviewText,
            productId: id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update review");
      }

      setEditingReviewId(null);
      setEditedReviewText("");
      await getAllReviews();
    } catch (error) {
      console.error("Error updating review:", error.message);
    }
  };

  const cancelEdit = () => {
    setEditingReviewId(null);
    setEditedReviewText("");
  };

  const deleteReview = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3030/data/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": auth.accessToken,
          },
        }
      );

      await getAllReviews();
    } catch (error) {
      console.error("Error deleting review:", error.message);
    }
  };

  return (
    <div className="reviewsbox">
      <div className="reviews-nav">
        <div className="reviews-nav-box">Reviews</div>
      </div>
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <div className="reviewsbox-reviews">
          {reviews.length === 0 ? (
            <h1>No reviews for this product</h1>
          ) : (
            reviews.map((review) => (
              <div key={review._id} className="reviewsbox-reviews-item">
                <p className="username">{review.username} says:</p>
                {editingReviewId === review._id ? (
                  <textarea
                    cols={50}
                    rows={8}
                    type="text"
                    value={editedReviewText}
                    onChange={(e) => setEditedReviewText(e.target.value)}
                  />
                ) : (
                  <p className="comment">{review.review}</p>
                )}
                {auth._id === review._ownerId ? (
                  <>
                    {editingReviewId === review._id ? (
                      <>
                        <button onClick={() => saveEditedReview(review._id)}>
                          SAVE
                        </button>
                        <button onClick={() => cancelEdit()}>CANCEL</button>
                      </>
                    ) : (
                      <button onClick={() => startEdit(review._id)}>
                        EDIT
                      </button>
                    )}
                    <button
                      className="deleteButton"
                      onClick={() => deleteReview(review._id)}
                    >
                      DELETE
                    </button>
                  </>
                ) : null}
              </div>
            ))
          )}
        </div>
      )}
      {auth && auth.accessToken && (
        <AddReview onReviewSubmit={handleReviewSubmit} />
      )}
    </div>
  );
}

export default Reviews;
