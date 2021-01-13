import React from "react";
import Axios from "axios";

const Api = () => {
  Axios({
    method: "get",
    url: "https://breakingbadapi.com/api/episodes",
    responseType: "json",
  }).then((response) => {
    console.log(response);
  });

  return <div></div>;
};

export default Api;
