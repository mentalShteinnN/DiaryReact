import CommentItemType from "./CommentItemType";

interface PostItemType {
    id: string;
    title: string;
    comments: CommentItemType[];
}

export default PostItemType;