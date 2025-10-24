import { observable } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
	id: string;
	text: string;
	completed: boolean;
}
interface Store {
	todos: Todo[];
	addTodo: (text: string) => void;
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
	total: number;
	completedCount: number;
	reset: () => void;
}

export const store$ = observable<Store>({
	todos: [],
	total: (): number => store$.todos.length,
	completedCount: (): number =>
		store$.todos.filter((todo) => todo.completed).length,
	addTodo: (text: string) => {
		const id = generatedId();
		console.log('addTodo', text);
		const newTodo: Todo = {
			id,
			text,
			completed: false,
		};
		console.log('newTodo', newTodo);
		store$.todos.push(newTodo);
		console.log('todos', store$.todos);
	},
	toggleTodo: (id: number) => {},
	removeTodo: (id: number) => {},
	reset: () => {
		store$.todos.set([]);
	},
});

const generatedId = () => uuidv4();

syncObservable(store$, {
	persist: {
		name: 'todo-store',
		plugin: ObservablePersistMMKV,
	},
});
