import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Button } from "../ui/button";
import logout from "../../assets/icons/logout.svg";
import { useUserContext } from "@/context/AuthContext";
import profile from "../../assets/icons/profile-placeholder.svg";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useEffect } from "react";

const Topbar = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate("/sign-in");
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src={logo} alt="logo" width={130} height={325} />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src={logout} alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl || profile}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
