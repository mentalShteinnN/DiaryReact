import React, { useState } from 'react'
import { PostItemType } from '../../types'
import Button from '../Button';
import Input from '../Input';
import "./PostItem.scss";
import EditModal from './EditModal';
import { useAppDispatch } from '../../hooks';
import { addComment, deleteComment, deletePost } from '../../store/slices/postsSlice';
import { toast } from 'react-toastify';

interface PostItemProps {
    post: PostItemType;
}

const PostItem: React.FC<PostItemProps> = ({
    post
}) => {

    const dispatch = useAppDispatch();

    const [isShow, setIsShow] = useState(false);
    const [value, setValue] = useState("");

    const [isModal, setIsModal] = useState(false);

    const addCommentHandler = (e: React.FormEvent) => {

        e.preventDefault();

        if (!value.trim()) {
            return toast.error("Введите комментарий");
        }

        dispatch(addComment({
            id: post.id,
            text: value
        }));
        setValue("");

    }

    const deletePostHandler = () => {
        dispatch(deletePost(post.id));
    }

    const deleteCommentHandler = (id: string) => {
        dispatch(deleteComment({
            id: post.id,
            commentId: id,
        }));
    }

    return (
        <>
            {
                isModal ?
                    <EditModal
                        postId={post.id} 
                        title={post.title}
                        toggleModal={() => setIsModal(false)}
                    /> 
                : 
                    <></>
            }
            <li className="post-item paper">
                <p className='post-item__text'>{post.title}</p>
                <div className="post-item__line"></div>
                {
                    isShow ?
                        <>  
                            <form className='post-item__comment-add' onSubmit={addCommentHandler}>
                                <Input 
                                    placeholder='Новый комментарий ...'
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                                <Button>
                                    Добавить
                                </Button>
                            </form>
                            {
                                post.comments && post.comments.length ? 
                                    <ul className='post-item__comments'>
                                        {post.comments.map((comment) => (
                                            <li key={comment.id} className='post-item__comments-item'>
                                                <div className='paper post-item__comments-item-text'>
                                                    {comment.text}
                                                </div>
                                                <Button onClick={() => deleteCommentHandler(comment.id)} buttonType="pink">
                                                    Удалить
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                :
                                    <></>
                            } 
                        </>
                    : 
                        <></>
                }
                <div className="post-item__bot">
                    <div className="post-item__toggle">
                        <Button onClick={() => setIsShow(!isShow)}>
                            {!isShow ? "Комментарии" : "Спрятать"}
                        </Button>
                        {
                            !isShow ? 
                                <p>Количество комментариев - {post.comments.length}</p>
                            : 
                                <></>
                        }
                    </div>
                    {
                        !isShow ?
                            <div className="post-item__ui">
                                <Button onClick={() => setIsModal(true)}>
                                    Изменить
                                </Button>
                                <Button buttonType="pink" onClick={deletePostHandler}>
                                    Удалить
                                </Button>
                            </div> 
                        : 
                            <></>
                    }
                </div>
            </li>
        </>
    )
}

export default PostItem