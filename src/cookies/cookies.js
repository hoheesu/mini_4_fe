import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
    const defaultOptions = { 
    path: '/', //모든 경로에서 접근 가능
    maxAge: 3600
    };
    const cookieOptions = { ...defaultOptions, ...options };
    return cookies.set(name, value, cookieOptions);
};

export const getCookie = (name) => {
    return cookies.get(name);
};

export const removeCookie = (name) => {
    return cookies.remove(name);
};