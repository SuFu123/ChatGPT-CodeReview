export declare class Chat {
    private openai;
    private isAzure;
    private isGithubModels;
    constructor(apikey: string);
    private generatePrompt;
    codeReview: (patch: string) => Promise<Array<{
        lgtm: boolean;
        review_comment: string;
        hunk_header?: string;
    }> | {
        lgtm: boolean;
        review_comment: string;
        hunk_header?: string;
    }>;
}
