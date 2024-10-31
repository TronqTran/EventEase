import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token') || null,
  error: null,
};

const initialViewState = {
  currentView: null,
};

const initialVenueState = {
  venueSelected: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }
});

const viewSlice = createSlice({
  name: 'view',
  initialState: initialViewState,
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload;
    },
    clearView: (state) => {
      state.currentView = null;
    },
  },
});

const venueSlice = createSlice({
  name: 'venue',
  initialState: initialVenueState,
  reducers: {
    selectVenue: (state, action) => {
      state.venueSelected = action.payload;
    },
    clearVenue: (state) => {
      state.venueSelected = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;
export const { setView, clearView } = viewSlice.actions;
export const { selectVenue, clearVenue } = venueSlice.actions;

export const rootReducer = {
  user: userSlice.reducer,
  view: viewSlice.reducer,
  venue: venueSlice.reducer,
};