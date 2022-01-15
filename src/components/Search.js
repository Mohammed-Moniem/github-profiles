import React, { useState } from "react";
import { getProfile } from "./../redux/actions/userProfileActions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Search = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      dispatch(getProfile(username.toLowerCase()));
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <SearchWrapper>
      <div className="user-form" id="form">
        <input
          type="text"
          id="search"
          placeholder="Search a Github User"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
      </div>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  .user-form {
    width: 100%;
    max-width: 700px;
  }

  .user-form input {
    width: 100%;
    display: block;
    background-color: #4c2885;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    font-family: inherit;
    font-size: 1rem;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(0, 0, 0, 0.1);
  }

  .user-form input::placeholder {
    color: #bbb;
  }

  .user-form input:focus {
    outline: none;
  }

  @media (max-width: 500px) {
    .user-form {
      max-width: 400px;
    }
  }
`;

export default Search;
