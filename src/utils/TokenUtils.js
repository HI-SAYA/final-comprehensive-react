import {jwtDecode} from "jwt-decode";

const BEARER = 'Bearer ';

export const saveToken = (headers) => {
    localStorage.setItem("access-token", headers['access-token']); // 키 + 밸류
    localStorage.setItem("refresh-token", headers['refresh-token']);
}

export const removeToken = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
}

const getAccessToken = () => window.localStorage.getItem('access-token');
const getRefreshToken = () => window.localStorage.getItem('refresh-token');
const getDecodeAccessToken = () => {
    return getAccessToken() && jwtDecode(getAccessToken());
}
const getDecodeRefreshToken = () => {
    return getRefreshToken() && jwtDecode(getRefreshToken());
}

export const getAccessTokenHeader = () => BEARER + getAccessToken();
export const getRefreshTokenHeader = () => BEARER + getRefreshToken();

export const isLogin = () => {
    // console.log(getDecodeAccessToken());
    // console.log(getDecodeRefreshToken());
    return getAccessToken() && getRefreshToken() && (Date.now() < getDecodeRefreshToken().exp * 1000);
    // refresh 토큰이 만료 되지 않았을 때 ui상에서 로그인 되어 있다.
}

export const isAdmin = () => {
    return isLogin() && (getDecodeAccessToken().memberRole === 'ROLE_ADMIN');
}