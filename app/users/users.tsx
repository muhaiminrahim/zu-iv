"use client";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { store } from "@/redux/store";
import { useRouter } from "next/navigation";

type userData = {
  avatar: string;
  email: string;
  first_name: string;
  id: Number;
  last_name: string;
};

type UsersProp = {
  data: userData[];
};
const Users: React.FC<UsersProp> = (props) => {
  const data = props.data;
  const router = useRouter();
  const useThisSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
  > = useSelector;
  const email = useThisSelector((state) => state.authReducer.value.email);
  const isAuth = useThisSelector((state) => state.authReducer.value.isAuth);
  if (!isAuth) {
    router.push("/error");
    return null;
  }

  return (
    <>
      <h1>Users Page</h1>
      <p>Email: {email}</p>
      {data.map((user, index) => {
        if (user.first_name.startsWith("G") || user.last_name.startsWith("W")) {
          return (
            <h5 key={index}>
              {user.first_name} - {user.last_name}
            </h5>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Users;
