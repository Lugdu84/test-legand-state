import RoundedButton from '@components/RoundedButton';
import TodosList from '@components/TodosList';

import { store$ } from '@lib/todo';
import { StyleSheet, View } from 'react-native';

export default function TodosScreen() {
	console.log('TodosScreen render ...');
	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<RoundedButton
					onPress={() => store$.reset()}
					iconName="trash"
				/>
			</View>
			<TodosList />

			<View style={styles.fabContainer}>
				<RoundedButton
					onPress={() => store$.addTodo('New Todo')}
					iconName="add"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttons: {
		flexDirection: 'row',
		gap: 10,
	},
	fabContainer: {
		position: 'absolute',
		right: 16,
		bottom: 24, // augmenter si nécessaire pour le home indicator
		// ombre Android/iOS
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
	},
	button: {
		backgroundColor: 'blue',
		padding: 2,
		borderRadius: 30,
	},
});
