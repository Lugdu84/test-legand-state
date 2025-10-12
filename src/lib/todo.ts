import { observable } from '@legendapp/state';

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}
interface Store {
	nextId: number;
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
	nextId: (): number => store$.todos.length + 1,
	addTodo: (text: string) => {
		console.log('addTodo', text);
		const newTodo: Todo = {
			id: store$.nextId.get(),
			text,
			completed: false,
		};
		store$.todos.push(newTodo);
		console.log(store$.todos.length);
	},
	toggleTodo: (id: number) => {},
	removeTodo: (id: number) => {},
	reset: () => {
		store$.todos.set([]);
	},
});
