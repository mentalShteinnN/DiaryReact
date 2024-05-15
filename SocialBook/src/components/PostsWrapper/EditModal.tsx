import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { editPost } from "../../store/slices/postsSlice";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import Input from "../Input";
import Button from "../Button";
import "./EditModal.scss";

interface EditModalProps {
    toggleModal: () => void;
    postId: string;
    title: string;
}

const EditModal: React.FC<EditModalProps> = ({
    toggleModal,
    postId,
    title,
}) => {

    const dispatch = useAppDispatch();

    const [value, setValue] = useState(title);

    const changePost = () => {

        if (!value.trim()) {
            return toast.error("Введите контент поста");
        }

        dispatch(editPost({
            id: postId,
            title: value,
        }));

        toggleModal();

    }

    return createPortal(
        <div className='modal' onClick={toggleModal}>
            <div className="modal__content paper" onClick={(e) => e.stopPropagation()}>
                <Input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Редактировать'
                    inputType="textarea"
                />
                <div className="modal__content-buttons">
                    <Button onClick={changePost}>
                        Подтвердить
                    </Button>
                    <Button onClick={toggleModal} buttonType="pink">
                        Закрыть
                    </Button>
                </div>
            </div>
        </div>, 
        document.body
    )
}

export default EditModal;