async function login(username, password) {
  const users = [{username: 'admin', password: '123'}];
  const user = users.filter(item => item.username === username && item.password === password);
  if (user.length) {
    user.authdata = window.btoa(username + ':' + password);
    localStorage.setItem('user', JSON.stringify(user));
    return user
  }
  else return Promise.reject('No User');
}

function logout() {
  localStorage.removeItem('user');
}

export const AuthService = {login, logout};