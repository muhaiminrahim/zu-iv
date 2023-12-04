import { userData } from "../types/types";

export const fetchData = async () => {
  let page = 1;
  let pageAvailable = true;
  const array: userData[] = [];

  while (pageAvailable) {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await res.json();
    array.push(...json.data);
    pageAvailable = !(page === json.total_pages);
    page++;
  }
  return array;
};
