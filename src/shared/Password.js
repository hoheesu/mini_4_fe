//비밀번호 :  최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자

export const passwordCheck = (pw) => {
    let regPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/;
    return regPass.test(pw);
}