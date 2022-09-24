import React from "react";

function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            //setBlogs(null);
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 500);
  }, [url]);
  return { data, isLoading, error };
}
export default useFetch;
