import axios from "axios";
import { useState, useEffect } from "react";

const UseEffectPage = () => {
  // data is the state that will hold the data from the api
  // error is the state that will hold the error if the request is not successful
  const [data, setData] = useState();
  const [error, setError] = useState();

  // using axios to fetch data from api
  // the .then is to set the data if the request is successful
  // the .catch is to set the error if the request is not successful
  const fetchData = () => {
    axios
      .get("https://catfact.ninja/facts")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };
  // a useEffect is a hook that runs whatever is inside it when the component is rendered
  // you can use a return to run a function when the component is unmounted/"un-rendered"
  useEffect(() => {
    fetchData();
  }, []);

  // if the data is not null it means it is "true" in a bool sense.
  // it can only be true if it has a value, so we know the api call was a success.
  if (data) {
    return (
      <>
        <h2>useEffect-Api</h2>
        <p>{data[0].fact}</p>
      </>
    );
  }

  // if the api call failed the .catch will run. Error will not be null since it contains the error response from the server
  // it will then be "true" in a bool sense
  else if (error) {
    return (
      <>
        <h2>useEffect-Api</h2>
        <p>Something went wrong refresh page</p>
      </>
    );
  }

  // if neither data or error has any value it means the api call is still running
  // that means we can show a loading screen
  else {
    return (
      <>
        <h2>useEffect-Api</h2>
        <p>Loading...</p>
      </>
    );
  }
};

export default UseEffectPage;
