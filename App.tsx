import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { add } from './count';
import { Counter } from '@components/TextCount';
import { MinusButton } from '@components/MinusButton';

export default function App() {
	console.log('rerender ...');

	return (
		<View style={styles.container}>
			<Text>Test du state !</Text>
			<View style={styles.buttons}>
				<Pressable
					style={styles.button}
					onPress={add}>
					<Ionicons
						name="add"
						size={32}
						color="white"
					/>
				</Pressable>
				<Counter />
				<MinusButton />
			</View>
			<StatusBar style="auto" />
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
	button: {
		backgroundColor: 'blue',
		padding: 2,
		borderRadius: 30,
	},
});
