import { observable } from '@legendapp/state';

export const count$ = observable(0);

export const add = () => {
	count$.set(count$.get() + 1);
	console.log('Count after add:', count$.get());
};

export const remove = () => {
	count$.set(count$.get() - 1);
	console.log('Count after remove:', count$.get());
};
