import RoundedButton from '@components/RoundedButton';
import TextTotal from '@components/TextTotal';

import { store$ } from '@lib/todo';
import { StyleSheet, View } from 'react-native';

export default function TodosScreen() {
	console.log('TodosScreen render ...');
	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<RoundedButton
					onPress={() => store$.addTodo('New Todo')}
					iconName="add"
				/>
				<RoundedButton
					onPress={() => store$.reset()}
					iconName="trash"
				/>
			</View>
			<TextTotal />
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
});
