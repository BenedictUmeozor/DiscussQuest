import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import EditForm from "../components/EditForm";

export default function EditProfile() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await axiosClient.get("/user");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-2">
      {!user && <p>Loading...</p>}
      {user && <EditForm user={user} />}
    </div>
  );
}
