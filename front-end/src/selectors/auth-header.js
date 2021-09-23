export function authHeader() {
  try {
    const { user } = JSON.parse(localStorage.getItem('persist:root'));
    const userObj = JSON.parse(user);
    if (userObj && userObj.accessToken) {
      return { 'x-access-token': userObj.accessToken };
    } else {
      return {};
    }
  } catch (error) {}
}
