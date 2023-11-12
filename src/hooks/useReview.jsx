import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      });
  }, []);

  return [reviews, loading];
};

export default useReview;
