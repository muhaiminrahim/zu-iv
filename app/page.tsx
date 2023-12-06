"use client";
import { signIn } from "@/firebase/initFirebase";
import { onLogIn } from "../redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { Dispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { LogInPayload } from "./types/types";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch<Dispatch>();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { user } = await signIn();

    if (!user || !user.email || !user.uid) {
      alert("Error");
      return;
    }

    const logInPayload: LogInPayload = {
      email: user.email,
      uid: user.uid,
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
