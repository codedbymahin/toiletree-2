import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ReviewsSection = ({ reviews = [], onSubmitReview = () => {}, isAuthenticated = false }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState({});

  const displayedReviews = showAllReviews ? reviews : reviews?.slice(0, 3);

  const handleHelpfulVote = (reviewId, isHelpful) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: isHelpful
    }));
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews?.forEach(review => {
      distribution[review.rating] = (distribution?.[review?.rating] || 0) + 1;
    });
    return distribution;
  };

  const getAverageRating = () => {
    if (reviews?.length === 0) return 0;
    const sum = reviews?.reduce((acc, review) => acc + review?.rating, 0);
    return (sum / reviews?.length)?.toFixed(1);
  };

  const ratingDistribution = getRatingDistribution();
  const averageRating = getAverageRating();

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-heading font-semibold text-foreground">
          Reviews & Ratings
        </h2>
        {isAuthenticated && (
          <Button variant="outline" size="sm" onClick={onSubmitReview}>
            Write Review
          </Button>
        )}
      </div>
      {/* Rating Summary */}
      <div className="mb-6 p-4 bg-muted rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-foreground">
              {averageRating}
            </div>
            <div className="flex items-center justify-center mb-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.floor(averageRating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              {reviews?.length} reviews
            </div>
          </div>

          <div className="flex-1">
            {[5, 4, 3, 2, 1]?.map(rating => (
              <div key={rating} className="flex items-center space-x-2 mb-1">
                <span className="text-xs text-muted-foreground w-2">
                  {rating}
                </span>
                <Icon name="Star" size={12} className="text-warning fill-current" />
                <div className="flex-1 bg-border rounded-full h-2">
                  <div
                    className="bg-warning rounded-full h-2 transition-all duration-300"
                    style={{
                      width: `${reviews?.length > 0 ? (ratingDistribution?.[rating] / reviews?.length) * 100 : 0}%`
                    }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-6">
                  {ratingDistribution?.[rating]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Reviews List */}
      <div className="space-y-4">
        {displayedReviews?.map((review) => (
          <div key={review?.id} className="border-b border-border pb-4 last:border-b-0">
            <div className="flex items-start space-x-3">
              <Image
                src={review?.userAvatar}
                alt={review?.userName}
                className="w-10 h-10 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-foreground text-sm">
                    {review?.userName}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < review?.rating ? 'text-warning fill-current' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(review?.date)}
                  </span>
                </div>

                <p className="text-sm text-foreground mb-2">
                  {review?.comment}
                </p>

                {/* Review Photos */}
                {review?.photos && review?.photos?.length > 0 && (
                  <div className="flex space-x-2 mb-2">
                    {review?.photos?.slice(0, 3)?.map((photo, index) => (
                      <Image
                        key={index}
                        src={photo}
                        alt={`Review photo ${index + 1}`}
                        className="w-16 h-16 rounded object-cover"
                      />
                    ))}
                    {review?.photos?.length > 3 && (
                      <div className="w-16 h-16 rounded bg-muted flex items-center justify-center text-xs text-muted-foreground">
                        +{review?.photos?.length - 3}
                      </div>
                    )}
                  </div>
                )}

                {/* Helpful Votes */}
                <div className="flex items-center space-x-4 text-xs">
                  <button
                    onClick={() => handleHelpfulVote(review?.id, true)}
                    className={`flex items-center space-x-1 transition-micro ${
                      helpfulVotes?.[review?.id] === true
                        ? 'text-success' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="ThumbsUp" size={12} />
                    <span>Helpful ({review?.helpfulCount || 0})</span>
                  </button>
                  
                  <button
                    onClick={() => handleHelpfulVote(review?.id, false)}
                    className={`flex items-center space-x-1 transition-micro ${
                      helpfulVotes?.[review?.id] === false
                        ? 'text-error' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="ThumbsDown" size={12} />
                    <span>Not helpful</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show More/Less Button */}
      {reviews?.length > 3 && (
        <div className="mt-4 text-center">
          <Button
            variant="ghost"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? 'Show Less' : `Show All ${reviews?.length} Reviews`}
          </Button>
        </div>
      )}
      {/* No Reviews State */}
      {reviews?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="MessageSquare" size={48} className="text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground">No reviews yet</p>
          <p className="text-sm text-muted-foreground">
            Be the first to share your experience!
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;