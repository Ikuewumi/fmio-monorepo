
export interface JobPosting {
        id: number;
        company: string;
        logo: string;
        logoBackground: string;
        position: string;
        postedAt: string;
        contract: string;
        location: string;
        website: string;
        apply: string;
        description: string;
        requirements: PostingDetail;
        role: PostingDetail;
}

export interface PostingDetail {
        content: string;
        items: string[];
}

