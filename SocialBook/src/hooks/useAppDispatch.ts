import { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';

type DispatchFunction = () => AppDispatch;

const useAppDispatch: DispatchFunction = useDispatch;

export default useAppDispatch;
