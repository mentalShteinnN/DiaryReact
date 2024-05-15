import React, { useState } from 'react'
import "./NewPostForm.scss";
import Input from '../Input';
import Button from '../Button';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks';

import { addPost } from '../../store/slices/postsSlice';

const NewPostForm: React.FC = () => {

    const dispatch = useAppDispatch();

    const [value, setValue] = useState("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (!value.trim()) {
            toast.error("Введите текст поста");
            return setValue("");
        }

        dispatch(addPost(value));
        setValue("");

    }

    return (
        <form onSubmit={submitHandler} className='new-post-form paper'>
            <Input 
                placeholder="Введите содержание поста"
                inputType="textarea"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit" className="new-post-form__button">
                Добавить
            </Button>
        </form>
    )
}

export default NewPostForm