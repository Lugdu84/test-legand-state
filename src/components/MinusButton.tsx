import { observer } from '@legendapp/state/react';

import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { remove, isFirst } from '@lib/count';

export const MinusButton = observer(() => {
	return (
		<Pressable
			style={[styles.button, isFirst() && styles.buttonDisabled]}
			onPress={remove}
			disabled={isFirst()}>
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
