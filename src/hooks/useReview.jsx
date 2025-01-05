import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://bistro-boss-server-eight-lilac.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      });
  }, []);

  return [reviews, loading];
};

export default useReview;
