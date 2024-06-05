const UserReview = () => {
  const reviews = [
    {
      id: 1,
      user: "nonne",
      comment: "Great recipe! Really enjoy it.",
    },
    {
      id: 2,
      user: "grader",
      comment: "good service. Will order again.",
    },
    {
      id: 3,
      user: "noastik",
      comment: "good delivery and asdfas quality.",
    },
  ];

  return (
    <div className="bg-slate-200 container mx-auto mt-10 p-4 ">
      <h2 className="text-xl font-bold text-center mb-8">User Reviews</h2>
      <div className="grid grid-cols-3 gap-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow p-4 mb-4">
            <p className="font-semibold">{review.user}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
