import axios from "axios";

export const getNewRefreshToken = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const result = await axios.post('/refresh',
    {
        refreshToken // 보오~디
    },
    {
        headers: {
            Authorization: accessToken // 헤에더
        }
    });
    return result.data;

}