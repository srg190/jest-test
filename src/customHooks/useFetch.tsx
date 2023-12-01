import { useEffect, useState } from "react";

export const useFecth = (url: string) => {
  const [data, setDate] = useState<Array<Object> | null>(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDate(data));
  });
  return [data];
};
