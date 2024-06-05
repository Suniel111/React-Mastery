import React, { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      const response = await fetch(url);
      const res = await response.json();
      setData(res);
    }
    getdata();
  }, []);
  return data;
};

export default UseFetch;
