// 이메일 : 이메일 형식이면 ok
export const idCheck = (id) => {
  let _reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return _reg.test(id);
}