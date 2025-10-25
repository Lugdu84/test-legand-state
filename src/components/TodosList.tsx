import { observer } from '@legendapp/state/react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { store$ } from '@lib/todo';

export const TodosList = () => {
	return (
		<FlatList
			data={store$.todos.get()}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View style={styles.item}>
					<Text>{item.text}</Text>
				</View>
			)}
		/>
	);
};

export default observer(TodosList);

const styles = StyleSheet.create({
	item: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
});
