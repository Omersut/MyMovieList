import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
// context
import { useAuth } from "../../context/AuthContext";
import { useList } from "../../context/ListContext";

function Navbar({ history }) {
  const { loggedIn, setloggedIn, logout } = useAuth();
  const { items } = useList();

  let navigate = useNavigate();
  const HandleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };

  return (
    <nav className="nav">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <Button ml={"20px"} fontSize={"16px"} colorScheme="#ffff40">
              🎥
            </Button>

            <Button
              ml={"20px"}
              variant="outline"
              fontSize={"17px"}
              colorScheme="#ffff40"
            >
              MOVIES
            </Button>
          </Link>
        </div>
      </div>

      <div className="right">
        {!loggedIn && (
          <>
            <Link to="/singup">
              <Button
                className="hover"
                variant="outline"
                mr={"5px"}
                colorScheme="yellow"
              >
                Register
              </Button>
            </Link>
            <Link to="/singin">
              <Button className="hover" colorScheme="blue">
                LogIn
              </Button>
            </Link>
          </>
        )}
        {loggedIn && (
          <>
            {items.length >= 0 && (
              <Link to="/mylist">
                <Button mr={"5px"} colorScheme="blue">
                  My List '{items.length}
                </Button>
              </Link>
            )}
            <Link to="/profile">
              <Button mr={"5px"} colorScheme="green">
                Profile
              </Button>
            </Link>

            <Button
              onClick={HandleLogout}
              color="black"
              variant="solid"
              colorScheme="red"
            >
              {"✘"}
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
