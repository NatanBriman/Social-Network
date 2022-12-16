import { useEffect } from 'react';
import useDataFromAPI from './useDataFromAPI';

const useLocalStorageFromAPI = (initialValue, requestDataFromAPI, key) => {
  const valueInLocalStorage = localStorage.getItem(key);
  const initialValueFromLocalStorage = valueInLocalStorage
    ? JSON.parse(valueInLocalStorage)
    : initialValue;

  const initializeValueInLocalStorage = async () => {
    if (valueInLocalStorage) return initialValueFromLocalStorage;

    const data = await requestDataFromAPI();
    localStorage.setItem(key, JSON.stringify(data));

    return data;
  };

  const [data, setData, isLoading] = useDataFromAPI(
    initialValueFromLocalStorage,
    initializeValueInLocalStorage
  );

  useEffect(() => {
    const stringValue = JSON.stringify(data);

    localStorage.setItem(key, stringValue);
  }, [key, data]);

  return [data, setData, isLoading];
};

export default useLocalStorageFromAPI;
