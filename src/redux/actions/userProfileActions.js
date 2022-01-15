import axios from "axios";

export const getProfile = (username) => async (dispatch) => {
  try {
    const user = window.localStorage.getItem(username);
    if (user) {
      dispatch({
        type: "USER_PROFILE_LOADED",
        payload: { ...JSON.parse(user) },
      });
    } else {
      const profile = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const repos = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created`
      );
      const userData = { ...profile.data, repos: [...repos.data] };
      window.localStorage.setItem(username, JSON.stringify(userData));
      dispatch({
        type: "USER_PROFILE_LOADED",
        payload: { ...userData },
      });
    }
  } catch (error) {
    console.log(error);
    localStorage.clear();
    dispatch({
      type: "USER_PROFILE_LOADING_FAILED",
    });
  }
};
