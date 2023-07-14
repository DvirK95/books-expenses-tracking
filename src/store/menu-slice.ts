import { createSlice } from '@reduxjs/toolkit';

export interface MenuState {
  screen: string;
  isOpenMenu: boolean;
}

const initialState: MenuState = {
  screen: 'MyBook',
  isOpenMenu: true,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    switchBtn(state) {
      state.isOpenMenu = !state.isOpenMenu;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
