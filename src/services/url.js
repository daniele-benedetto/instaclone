const loginUrl = "/login";
const registerUrl = "/register";

const postsUrl = "/posts";
const postsUrlExpandUser = "/posts?_expand=user&_sort=id&_order=desc";

const usersUrl = "/users";
const userWithAuthUrl = "/664/users";

const generateUrl = (url, params = []) => {
	const urlServerWithAuth = `${process.env.REACT_APP_URL}${url}?`;

	if(params && params.length > 0 ) {
		let paramsUrl = new URLSearchParams();

		params.forEach(param => {
			paramsUrl.append(param.key, param.value);
		});
		return urlServerWithAuth + `&${paramsUrl.toString()}`;
	}

	return urlServerWithAuth;
}

export { loginUrl ,registerUrl, postsUrl, postsUrlExpandUser, usersUrl, userWithAuthUrl, generateUrl};