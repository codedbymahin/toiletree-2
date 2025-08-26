import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const RecentReviews = ({ reviews, onRespond }) => {
  const [expandedReview, setExpandedReview] = useState(null);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })?.format(new Date(date));
  };

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-600';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const toggleExpanded = (reviewId) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId);
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Recent Reviews</h3>
            <p className="text-sm text-muted-foreground mt-1">Latest community feedback</p>
          </div>
          <Button variant="outline" size="sm" iconName="MessageSquare" iconSize={16}>
            View All
          </Button>
        </div>
      </div>
      <div className="divide-y divide-border">
        {reviews?.map((review) => (
          <div key={review?.id} className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={review?.userAvatar}
                  alt={review?.userName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-foreground">{review?.userName}</h4>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{formatDate(review?.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review?.rating)}
                    <span className={`text-sm font-medium ml-1 ${getRatingColor(review?.rating)}`}>
                      {review?.rating}.0
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <p className="text-sm font-medium text-foreground mb-1">{review?.facilityName}</p>
                  <p className="text-xs text-muted-foreground">{review?.facilityLocation}</p>
                </div>

                <div className="mb-3">
                  <p className={`text-sm text-foreground ${expandedReview !== review?.id && review?.comment?.length > 150 ? 'line-clamp-3' : ''}`}>
                    {review?.comment}
                  </p>
                  {review?.comment?.length > 150 && (
                    <button
                      onClick={() => toggleExpanded(review?.id)}
                      className="text-sm text-primary hover:text-primary/80 mt-1 transition-micro"
                    >
                      {expandedReview === review?.id ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>

                {review?.photos && review?.photos?.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review?.photos?.slice(0, 3)?.map((photo, index) => (
                      <div key={index} className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={photo}
                          alt={`Review photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {review?.photos?.length > 3 && (
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">+{review?.photos?.length - 3}</span>
                      </div>
                    )}
                  </div>
                )}

                {review?.response ? (
                  <div className="bg-muted rounded-lg p-3 mt-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="MessageCircle" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Your Response</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(review?.responseDate)}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{review?.response}</p>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onRespond(review?.id)}
                      iconName="Reply"
                      iconSize={14}
                    >
                      Respond
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Heart"
                      iconSize={14}
                    >
                      Thank
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {reviews?.length === 0 && (
        <div className="p-12 text-center">
          <Icon name="MessageSquare" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">No Reviews Yet</h4>
          <p className="text-sm text-muted-foreground">
            Reviews from the community will appear here once your facilities are visited.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentReviews;