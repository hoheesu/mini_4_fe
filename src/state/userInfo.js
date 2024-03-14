// import { create } from 'zustand';

// interface userInfoType {
//   profileUrl: string
//   nickname: string
// }

// interface UserInfoState {
//   userInfo: userInfoType
// }

// interface UserInfoActions {
//   setUserInfo: (userinfo: userInfoType) => void
//   deleteUserInfo: () => void
// }

// const defaultState = { profileUrl: '', nickname: '' }

// const useUserInfo  = create<UserInfoState & UserInfoActions>((set) => ({
//   userInfo: defaultState,
//   setUserInfo: (userInfo: userInfoType) => {set({ userInfo })},
//   deleteUserInfo: () => {set({userInfo: defaultState})}
// }))

// export default useUserInfo
