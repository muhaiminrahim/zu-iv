"use client";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { Dispatch, State } from "@/redux/store";
import { useRouter } from "next/navigation";
import { userData } from "../types/types";
import { useEffect, useState } from "react";
import { onLogOut } from "@/redux/features/auth-slice";

type UsersProp = {
  data: userData[];
};
const Users: React.FC<UsersProp> = ({ data }) => {
  const [isMasked, setIsMasked] = useState(true);
  const [isLogOut, setIsLogOut] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<Dispatch>();
  const logOut = () => {
    setIsLogOut(true);
    dispatch(onLogOut());
    router.push("/");
    return;
  };

  const useThisSelector: TypedUseSelectorHook<State> = useSelector;
  const isAuth = useThisSelector((state) => state.authReducer.value.isAuth);

  useEffect(() => {
    if (!isAuth && !isLogOut) {
      router.push("/error");
    }
  }, [isAuth, router, isLogOut]);

  const maskEmail = (email: string) =>
    email
      .split("")
      .map(() => "*")
      .join("");

  return isAuth ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "15vw",
        }}
      >
        <h1 style={{ marginBottom: "25px" }}>Users Page</h1>
        <button style={{ maxHeight: "34px" }} onClick={logOut}>
          Logout
        </button>
      </div>
      {data.map((user, index) => {
        if (user.first_name.startsWith("G") || user.last_name.startsWith("W")) {
          return (
            <h3 key={index}>
              {user.first_name} - {user.last_name} -{" "}
              {isMasked ? maskEmail(user.email) : user.email}
            </h3>
          );
        } else {
          return null;
        }
      })}
      <button
        style={{ marginTop: "5px" }}
        onClick={() => setIsMasked(!isMasked)}
      >
        {isMasked ? "Display Email" : "Mask Email"}
      </button>
    </>
  ) : null;
};

export default Users;
