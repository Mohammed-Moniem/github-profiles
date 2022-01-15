import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import UserInfoCard from "../components/UserInfoCard";
import Search from "./../components/Search";

const Profiles = () => {
  const user = useSelector((store) => store.userProfile.user);
  return (
    <ProfileWrapper>
      <div className="container">
        <Search />
        {user.name && <UserInfoCard user={user} />}
      </div>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Profiles;
