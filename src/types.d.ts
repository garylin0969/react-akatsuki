interface Member {
    name: string;
    jpName: string;
    lines: string;
    profile: {
        title: string;
        description: string[];
    }[];
    infoContent: string;
    src: string;
}

export interface Members extends Array<Member> {}

export interface MemberSliceState {
    memberState: boolean;
    memberData: Member;
}

export interface UseSelectorAll extends MemberSliceState {}
