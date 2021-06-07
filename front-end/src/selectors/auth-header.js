export function authHeader() {
  const { user } = JSON.parse(localStorage.getItem('persist:root'));
  const userObj = JSON.parse(user);
  console.log(userObj);

  if (userObj && userObj.accessToken) {
    return { Authorization: userObj.accessToken };
  } else {
    return {};
  }
}
