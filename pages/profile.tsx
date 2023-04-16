/* eslint-disable @next/next/no-img-element */
import Typo from "@/components/Typo";
import Link from "next/link";

const Profile = () => {
  // const { user, isLoading } = useUser();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user || !user.picture || !user.name || !user.nickname || !user.email)
  //   return;

  // const handleChange = (field: any) => (event: any) => {
  //   if (field === "given_name") {
  //     console.log(event.target.value);
  //   } else if (field === "family_name") {
  //     console.log(event.target.value);
  //   } else if (field === "nickname") {
  //     console.log(event.target.value);
  //   } else if (field === "email") {
  //     console.log(event.target.value);
  //   }
  // };

  return (
    <div className="flex flex-col container">
      {/* <Typo fontFamily="Playfair Display" className="text-6xl font-bold mb-2">Profile</Typo>
      <hr className="w-full mb-4" />
      <div className="flex">
        <img
          src={user.picture}
          alt={user.name}
          className="w-32 h-32 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <button className="bg-blue-500 text-white p-2 rounded-full mb-2">
            Change
          </button>
          <button className="bg-red-500 text-white p-2 rounded-full">
            Delete
          </button>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={user.name}
            onChange={handleChange("given_name")}
          />
          <button className="bg-blue-500 text-white p-2 rounded-full mt-2">
            Update
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={user.name}
            onChange={handleChange("family_name")}
          />
          <button className="bg-blue-500 text-white p-2 rounded-full mt-2">
            Update
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">
            User Name
          </label>
          <input
            type="text"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={user.nickname}
            onChange={handleChange("nickname")}
          />
          <button className="bg-blue-500 text-white p-2 rounded-full mt-2">
            Update
          </button>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="text"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={user.email}
            onChange={handleChange("email")}
          />
          <button className="bg-blue-500 text-white p-2 rounded-full mt-2">
            Update
          </button>
        </div>
      </div>
      <div className="w-full mt-4">
        <button className="bg-blue-500 text-white p-2 rounded-full">
          Change Password
        </button>
      </div>
      <div className="w-full mt-4">
        <Link
          className="bg-red-500 text-white p-2 rounded-full mr-2"
          href={"/api/auth/logout"}
        >
          Logout
        </Link>
        <button className="bg-red-500 text-white p-2 rounded-full">
          Delete Account
        </button>
      </div> */}
    </div>
  );
};

export default Profile;
