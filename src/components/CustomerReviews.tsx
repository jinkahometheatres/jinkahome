import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Edit2, X, ChevronDown, ChevronRight, User } from 'lucide-react';
import { fetchReviews, createReview, updateReview } from '../services/api';

interface Review {
  id: number;
  name: string;
  text: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}

export const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Local storage for tracking my reviews
  const [myReviewIds, setMyReviewIds] = useState<number[]>([]);
  
  // Form State
  const [formData, setFormData] = useState({ id: 0, name: '', text: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadReviews();
    const storedIds = localStorage.getItem('jinka_my_reviews');
    if (storedIds) {
      setMyReviewIds(JSON.parse(storedIds));
    }
  }, []);

  const loadReviews = async () => {
    setLoading(true);
    const data = await fetchReviews();
    setReviews(data);
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setFormData({ id: 0, name: '', text: '' });
    setIsEditing(false);
    setShowModal(true);
  };

  const handleOpenEdit = (review: Review) => {
    setFormData({ id: review.id, name: review.name, text: review.text });
    setIsEditing(true);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.text.trim()) return;

    setSubmitting(true);
    if (isEditing && formData.id) {
      const updated = await updateReview(formData.id, { name: formData.name, text: formData.text });
      if (updated) {
        setReviews(reviews.map(r => r.id === formData.id ? updated : r));
        setShowModal(false);
      }
    } else {
      const created = await createReview({ name: formData.name, text: formData.text });
      if (created) {
        const newIds = [...myReviewIds, created.id];
        setMyReviewIds(newIds);
        localStorage.setItem('jinka_my_reviews', JSON.stringify(newIds));
        setReviews([created, ...reviews]);
        setShowModal(false);
      }
    }
    setSubmitting(false);
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <section id="reviews" className="py-20 bg-brand-black border-t border-brand-gold/10 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-12 bg-brand-gold"></div>
              <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-semibold">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white font-playfair">
              What Our <span className="text-brand-gold italic">Clients</span> Say
            </h2>
          </div>
          <button 
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-black text-sm tracking-widest uppercase font-semibold hover:bg-brand-gold-light transition-all duration-300 w-fit"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Add Review</span>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-t-2 border-brand-gold border-solid rounded-full animate-spin"></div>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12 border border-brand-gold/20 bg-white/5 rounded-lg">
            <p className="text-slate-400 font-light text-lg">No reviews yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500`}>
              {displayedReviews.map((review) => (
                <div key={review.id} className="bg-white/5 border border-brand-gold/10 p-6 rounded-lg hover:border-brand-gold/30 transition-all duration-300 group flex flex-col h-full relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 italic line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-gold/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">{review.name}</h4>
                        <span className="text-brand-gold/60 text-xs text-[10px] uppercase tracking-wider">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {myReviewIds.includes(review.id) && (
                      <button 
                        onClick={() => handleOpenEdit(review)}
                        className="p-2 text-slate-400 hover:text-brand-gold transition-colors"
                        title="Edit Review"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {reviews.length > 4 && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light text-sm tracking-widest uppercase font-semibold transition-colors"
                >
                  {showAll ? (
                    <>Show Less <ChevronDown className="w-4 h-4 rotate-180 transition-transform" /></>
                  ) : (
                    <>View More <ChevronDown className="w-4 h-4 transition-transform" /></>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-brand-black border border-brand-gold/20 w-full max-w-lg p-8 relative rounded-lg shadow-2xl animate-fade-in">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-brand-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl text-white font-playfair mb-6">
              {isEditing ? 'Edit Your Review' : 'Share Your Experience'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-brand-gold/20 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-sm"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Your Review</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.text}
                  onChange={(e) => setFormData({...formData, text: e.target.value})}
                  className="w-full bg-white/5 border border-brand-gold/20 text-white px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors rounded-sm resize-none"
                  placeholder="Tell us what you think..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-brand-gold text-brand-black py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-light transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {submitting ? 'Submitting...' : isEditing ? 'Update Review' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
