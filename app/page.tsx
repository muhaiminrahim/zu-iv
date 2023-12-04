"use client";
import { signIn } from "@/firebase/initFirebase";
import { LogInPayload, onLogIn } from "../redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { store } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
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
    router.push("/users");
  };
  return (
    <div className="center-container">
      <div className="center">
        <h1>Login Page</h1>
        <form>
          <button
            style={{ height: "30px", margin: "5px", padding: "5px" }}
            onClick={handleLogin}
          >
            Login With Google
          </button>
        </form>
      </div>
    </div>
  );
}
