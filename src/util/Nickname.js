// 닉네임 : 3~15자리 (중복된 닉네임 X) ==> 아래는 아직 중복만 체크 안한 코드

export const nicknameCheck = (nickname) => {
    let regNick = /^[a-zA-Z0-9]{3,15}$/;
    return regNick.test(nickname);
}
