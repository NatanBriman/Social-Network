import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    return jsonValue != null ? JSON.parse(jsonValue) : initialValue;
  });

  // Maybe use useEffect instead of useMemo
  useEffect(() => {
    const stringValue = JSON.stringify(value);

    localStorage.setItem(key, stringValue);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
