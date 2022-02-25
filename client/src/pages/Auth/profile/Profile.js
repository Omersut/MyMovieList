import { useAuth } from "../../../context/AuthContext";

function Profile() {
  const { user } = useAuth();
  return (
    <div>
      {user.role}
      <br />
      {user._id}
      <br />
      {user.email}
    </div>
  );
}

export default Profile;
