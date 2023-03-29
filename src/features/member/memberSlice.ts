import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Member, MemberSliceState } from '../../types';

const initialState: MemberSliceState = {
    memberState: false,
    memberData: {
        name: '',
        jpName: '',
        lines: '',
        profile: [{ title: '', description: [] }],
        infoContent: '',
        src: '',
    },
};

export const MemberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        setMember: (state = initialState, action: PayloadAction<Member>) => {
            state.memberState = true;
            state.memberData = action.payload;
        },
        setMemberState: (state = initialState, action: PayloadAction<boolean>) => {
            state.memberState = action.payload;
        },
        resetMember: (state = initialState) => {
            state.memberData = initialState.memberData;
        },
    },
});

export const { setMember, resetMember, setMemberState } = MemberSlice.actions;
// export const selectMember = (state: RootState) => state.member.memberData;
export const selectMember = createSelector(
    (state: RootState) => state.member,
    (member) => member
);
export default MemberSlice.reducer;
