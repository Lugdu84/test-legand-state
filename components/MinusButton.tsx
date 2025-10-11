import { observer } from '@legendapp/state/react';

import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { count$ } from '../count';
import { remove } from '../count';

export const MinusButton = observer(() => {
	const isDisabled = count$.get() === 0;

	return (
		<Pressable
			style={[styles.button, isDisabled && styles.buttonDisabled]}
			onPress={remove}
			disabled={isDisabled}>
			<Ionicons
				name="remove"
				size={32}
				color="white"
			/>
		</Pressable>
	);
});

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'blue',
		padding: 2,
		borderRadius: 30,
	},
	buttonDisabled: {
		backgroundColor: '#cccccc',
		opacity: 0.5,
	},
});
