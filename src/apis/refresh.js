import { instance } from "./axios";
import { Cookies } from "react-cookie";

export const getNewRefreshToken = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken'); // 쿠키로 바꾸기
    const result = await instance.post('/refresh',
    {
        refreshToken // 보오디
    },
    {
        headers: {
            authorization: accessToken // 헤에더
        },
    }
    )
    return result.data; //데이터 내보내기
}