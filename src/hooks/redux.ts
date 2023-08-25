import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, bindActionCreators } from "redux";
import ActionCreators from '../store/reducers/index';



 const useAppDispatch = () => useDispatch<ThunkDispatch<RootState,unknown,AnyAction>>();

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}



export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;