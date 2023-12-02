import Users from "./users";
type userData = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};
export default async function UsersPage() {
  const fetchData = async () => {
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
  let data: userData[] = await fetchData();

  return (
    <div className="center-container">
      <div className="center">
        <Users data={data} />
      </div>
    </div>
  );
}
