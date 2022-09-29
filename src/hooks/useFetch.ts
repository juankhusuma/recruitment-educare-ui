import { useEffect, useState } from "react";

export function useFetch<T>(
  url: string
): [T | null | undefined, boolean, Error | null | undefined] {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null | undefined>({} as T);
  const [error, setError] = useState<Error | null | undefined>();
  useEffect(() => {
    setLoading(() => true);
    setError(() => null);
    (async () => {
      try {
        const res = await fetch(url);
        const data = (await res.json()) as T;
        setData(() => data);
        setLoading(() => false);
      } catch (e) {
        setError(() => e as Error);
        setLoading(() => false);
      }
    })();
  }, [url]);
  return [data, loading, error];
}
