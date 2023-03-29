import { bindActionCreators } from 'redux';
import useAppDispatch from '../useAppDispatch';
import * as actionCreators from './actionCreators';

const useActions = (): typeof actionCreators => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actionCreators, dispatch);
};

export default useActions;
