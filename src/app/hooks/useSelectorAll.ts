import { selectMember } from '../../features/member/memberSlice';
import { UseSelectorAll } from '../../types';
import useAppSelector from './useAppSelector';

const useSelectorAll = (): UseSelectorAll => {
    const member = useAppSelector(selectMember);
    return {
        ...member,
    };
};

export default useSelectorAll;
