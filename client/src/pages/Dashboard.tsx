import { useEffect } from "react";
import { useRegisterUserMutation } from "../provider/userSlice";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
type kindeUser = {
  id: string | null;
  email: string | null;
  given_name: string | null;
  family_name: string | null;
  picture: string | null;
};
function Dashboard() {
  const { user, isAuthenticated } = useKindeAuth();
  const [registerUser] = useRegisterUserMutation();

  const handleRegister = async (user: kindeUser | undefined) => {
    registerUser({
      id: user?.id as string,
      name: ` ${user?.given_name as string} ${user?.family_name as string}`,
      email: user?.email as string,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        if (isAuthenticated) {
          return await handleRegister(user);
        }
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    })();
  }, []);
  return <div className="md:container mt-5">Dashboard</div>;
}

export default Dashboard;
