import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import EditForm from "../components/EditForm";
import { EditProfileLoader } from "../components/SkeletonLoader";
import Error from "../components/Error";

export default function EditProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    setError(false);
    try {
      const { data } = await axiosClient.get("/user");
      setUser(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-2">
      {!user && !error && <EditProfileLoader />}
      {user && !error && <EditForm user={user} />}
      {error && <Error />}
    </div>
  );
}
