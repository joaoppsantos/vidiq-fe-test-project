import { useState, useEffect } from 'react';
import { LocalStorageProps } from '../types';

export const useLocalStorage = (
  key: string,
  defaultValue: LocalStorageProps | {}
) => {
  const [value, setValue] = useState(() => {
    try {
      const localStorageValue = localStorage.getItem(key);
      return localStorageValue ? JSON.parse(localStorageValue) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
