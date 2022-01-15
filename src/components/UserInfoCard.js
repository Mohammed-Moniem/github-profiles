import React from "react";
import styled from "styled-components";

const UserInfoCard = ({ user }) => {
  return (
    <CardWrapper>
      <div className="card">
        <div>
          <img src={user.avatar_url} alt={user.name} className="avatar" />
        </div>
        <div className="user-info">
          <h2>{user.name}</h2>
          {user.bio}
          <ul>
            <li>
              {user.followers} <strong>Followers</strong>
            </li>
            <li>
              {user.following} <strong>Following</strong>
            </li>
            <li>
              {user.public_repos} <strong>Repos</strong>
            </li>
          </ul>

          {user.repos.length > 0 && (
            <div id="repos">
              {user.repos.map((repo) => (
                <a
                  key={repo.name}
                  className="repo"
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {repo.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  .card {
    max-width: 800px;
    background-color: #4c2885;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 3rem;
    margin: 0 1.5rem;
  }

  .avatar {
    border-radius: 50%;
    border: 10px solid #2a2a72;
    height: 150px;
    width: 150px;
  }

  .user-info {
    color: #eee;
    margin-left: 2rem;
  }

  .user-info h2 {
    margin-top: 0;
  }

  .user-info ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    max-width: 400px;
  }

  .user-info ul li {
    display: flex;
    align-items: center;
  }

  .user-info ul li strong {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }

  .repo {
    text-decoration: none;
    color: #fff;
    background-color: #212a72;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  @media (max-width: 500px) {
    .card {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export default UserInfoCard;
