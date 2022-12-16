import { useEffect, useState } from 'react';

const initializeDataFromAPI = async (requestDataFromAPI, callback) => {
  const data = await requestDataFromAPI();

  callback(data);
};

const useDataFromAPI = (initialValue, getData) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    initializeDataFromAPI(getData, setData);
  }, []);

  return [data, setData];
};

export default useDataFromAPI;
