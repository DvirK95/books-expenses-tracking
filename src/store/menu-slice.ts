import { createSlice } from '@reduxjs/toolkit';

export interface MenuState {
  screen: string;
  isOpenMenu: boolean;
  isLogIn: boolean;
}

const initialState: MenuState = {
  screen: 'MyBook',
  isOpenMenu: true,
  isLogIn: Boolean(localStorage.getItem('Login')),
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    switchBtn(state) {
      state.isOpenMenu = !state.isOpenMenu;
    },
    login(state) {
      localStorage.setItem('Login', 'true');
      state.isLogIn = true;
    },
    logout(state) {
      localStorage.setItem('Login', 'false');
      state.isLogIn = false;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
