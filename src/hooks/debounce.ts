import React, { useEffect } from 'react';

export function useDebounce(value: string, delay = 300): string {
  const [debounced, setDebounced] = React.useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
