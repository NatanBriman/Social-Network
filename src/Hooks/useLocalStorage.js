import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    return initialValue;
  });

  useEffect(() => {
    const stringValue = JSON.stringify(value);

    localStorage.setItem(key, stringValue);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
