import { StyleSheet, Text } from 'react-native';
import { use$ } from '@legendapp/state/react';
import { store$ } from '@lib/todo';

export default function TextTotal() {
	// Ces deux lignes sont équivalentes
	const total = use$(store$.total);

	// const totalWithGet = store$.total.get();

	return <Text style={styles.text}> Total : {total}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
