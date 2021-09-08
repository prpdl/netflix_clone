import { useEffect, useState } from "react";

function getStoredValue(key, defaultValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    return savedValue || defaultValue;
}

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
      return getStoredValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue]
}
