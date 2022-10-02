import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logOut={true} />
    </div>
  );
}

export default HomePage;
