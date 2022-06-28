import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import chatReducer from '../components/Chat/chatSlice';
import systemNotificationReducer from '../components/SystemNotification/store/systemNotificationSlice';
import dashboardReducer from '../pages/Dashboard/store/dashboardSlice';
import historyReducer from '../pages/Stations/StationsList/StationCard/components/SettingsPanel/History/store/historySlice';
import stationsReducer from '../pages/Stations/store/stationsSlice';
import authReducer from './Auth/authSlice';
import themeReducer from './Theme/themeSlice';
import userReducer from './User/userSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        user: userReducer,
        dashboard: dashboardReducer,
        chat: chatReducer,
        stations: stationsReducer,
        systemNotification: systemNotificationReducer,
        history: historyReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
