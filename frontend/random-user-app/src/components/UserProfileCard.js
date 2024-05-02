// src/components/UserProfileCard.js

import React, { useState, useEffect } from "react";

const UserProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mt-10">
      {user && (
        <>
          <img
            className="w-full h-auto"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {user.name.first} {user.name.last}
            </div>
            <p className="text-gray-700 text-base">
              Gender: {user.gender}
            </p>
            <p className="text-gray-700 text-base">
              Email: {user.email}
            </p>
            <p className="text-gray-700 text-base">
              Location: {user.location.city}, {user.location.country}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfileCard;
