export class CustomResult {
    public exhaustiveNbHits: boolean;
    public hits: CustomHits[];
    public hitsPerPage: number;
    public nbHits: number;
    public nbPages: number;
    public page: number;
    public params: string;
    public processingTimeMS: number;

}

export class CustomHits {
    public author: string;
    public comment_text: string;
    public created_at: string;
    public created_at_i: number;
    public num_comments: number;
    public objectID: string;
    public story_text: string;
    public title: string;
    public story_title: string;
    public url: string;
}
