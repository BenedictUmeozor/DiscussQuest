const Avatar = ({ name }) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
    "bg-gray-500",
    "bg-red-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-yellow-600",
    "bg-indigo-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-teal-600",
    "bg-orange-600",
    "bg-cyan-600",
    "bg-gray-600",
    "bg-red-700",
    "bg-blue-700",
    "bg-green-700",
    "bg-yellow-700",
    "bg-indigo-700",
    "bg-purple-700",
    "bg-pink-700",
    "bg-teal-700",
  ];

  return (
    <div
      className={`h-7 w-7 rounded-full ${
        colors[Math.floor(Math.random() * colors.length - 1)]
      } flex items-center justify-center uppercase text-white`}
    >
      {name[0]}
    </div>
  );
};

export default Avatar;
