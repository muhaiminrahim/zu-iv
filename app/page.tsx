"use client";
import { signIn } from "@/firebase/initFirebase";
import { LogInPayload, onLogIn, onLogOut } from "../redux/features/auth-slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { store } from "@/redux/store";

export default function LoginPage() {
  const useThisSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
  > = useSelector;
  const isAuth = useThisSelector((state) => state.authReducer.value.isAuth);
  const email = useThisSelector((state) => state.authReducer.value.email);

  const dispatch = useDispatch<typeof store.dispatch>();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signIn();
    if (
      response.user === null ||
      response.user.email === null ||
      response.user.uid === null
    ) {
      alert("Error");
      return;
    }
    const logInPayload: LogInPayload = {
      email: response.user.email,
      uid: response.user.uid,
    };
    dispatch(onLogIn(logInPayload));
  };
  return (
    <div className="center-container">
      <div className="center">
        <h1>Login Page</h1>
        {isAuth === false ? (
          <form>
            <button
              style={{ height: "30px", margin: "5px", padding: "5px" }}
              onClick={handleLogin}
            >
              Login With Google
            </button>
          </form>
        ) : (
          <p>Hi {email}</p>
        )}
      </div>
    </div>
  );
}
