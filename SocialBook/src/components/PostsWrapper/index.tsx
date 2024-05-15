import { useAppSelector } from '../../hooks';
import PostItem from './PostItem';

import "./PostsWrapper.scss";

const PostsWrapper = () => {

    const posts = useAppSelector(state => state.posts.posts);

    if (!posts || !posts.length) {
        return <></>;
    }

    return (
        <ul className="posts-wrapper">
            {
                posts.map((post) => (
                    <PostItem 
                        key={post.id}
                        post={post}
                    />
                ))
            }
        </ul>
    )
}

export default PostsWrapper