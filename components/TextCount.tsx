import { StyleSheet, Text } from 'react-native';
import { observer } from '@legendapp/state/react';
import { count$ } from '../count';

export const Counter = observer(() => {
	return <Text style={styles.text}>{count$.get()}</Text>;
});

const styles = StyleSheet.create({
	text: {
		fontSize: 32,
		fontWeight: 'bold',
		color: 'black',
		alignSelf: 'center',
		paddingHorizontal: 10,
	},
});
