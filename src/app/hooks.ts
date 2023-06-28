import { SetStateAction, Dispatch, useState, useRef, useCallback } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//to use useState and useRef at the same time for latest value after state update

const isFunction = <S>(
	setStateAction: SetStateAction<S>
): setStateAction is (prevState: S) => S =>
	typeof setStateAction === 'function';

type ReadOnlyRefObject<T> = {
	readonly current: T;
};

type UseStateRef = {
	<S>(initialState: S | (() => S)): [
		S,
		Dispatch<SetStateAction<S>>,
		ReadOnlyRefObject<S>
	];
	<S = undefined>(): [
		S | undefined,
		Dispatch<SetStateAction<S | undefined>>,
		ReadOnlyRefObject<S | undefined>
	];
};

const useStateRef: UseStateRef = <S>(initialState?: S | (() => S)) => {
	const [state, setState] = useState(initialState);
	const ref = useRef(state);

	const dispatch: typeof setState = useCallback((setStateAction: any) => {
		ref.current = isFunction(setStateAction)
			? setStateAction(ref.current)
			: setStateAction;

		setState(ref.current);
	}, []);

	return [state, dispatch, ref];
};

export default useStateRef;
