import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PostItemType } from '../../types';
import { nanoid } from 'nanoid';

interface InitialStateType {
    posts: PostItemType[],
}

const initialState: InitialStateType = {
    posts: [],
};

interface IDeleteComment {
    id: string;
    commentId: string;
}

interface IAddComment {
    id: string;
    text: string;
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<string>) => {
        state.posts = [
            ...state.posts,
            {
                id: nanoid(),
                title: action.payload,
                comments: [],
            } 
        ];
    },
    deletePost: (state, action: PayloadAction<string>) => {
        state.posts = [
            ...state.posts.filter((el) => el.id !== action.payload),
        ];
    },
    editPost: (state, action: PayloadAction<{ id: string, title: string }>) => {
        state.posts = [
            ...state.posts.map((el) => {

                if (el.id === action.payload.id) {
                    return {
                        ...el,
                        title: action.payload.title
                    };
                }

                return el;

            }),
        ];
    },
    addComment: (state, action: PayloadAction<IAddComment>) => {
        state.posts = [...state.posts.map((post) => {

            if (post.id === action.payload.id) {
                return {
                    ...post,
                    comments: [
                        ...post.comments,
                        {
                            id: nanoid(),
                            text: action.payload.text,
                        }
                    ]
                }
            }

            return post;

        })]
    },
    deleteComment: (state, action: PayloadAction<IDeleteComment>) => {
        state.posts = [...state.posts.map((el) => {

            if (el.id === action.payload.id) {
                return {
                    ...el,
                    comments: el.comments.filter((comment) => comment.id !== action.payload.commentId),
                };
            }

            return el;

        })]
    },
  }
});

export const {
    addPost, 
    deletePost, 
    editPost, 
    addComment,
    deleteComment 
} = postsSlice.actions;

export default postsSlice.reducer;