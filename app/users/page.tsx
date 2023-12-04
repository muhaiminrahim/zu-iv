import Users from "./users";
import { userData } from "../types/types";
import { fetchData } from "../utils/fetchData";

export default async function UsersPage() {
  let data: userData[] = await fetchData();

  return (
    <div className="center-container">
      <div className="center">
        <Users data={data} />
      </div>
    </div>
  );
}
