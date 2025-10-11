import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { add, count$, remove } from './count';
import { Counter } from './TextCount';

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
				{/* <Counter /> */}
				<Text>{count$.get()}</Text>
				<Pressable
					style={styles.button}
					onPress={remove}>
					<Ionicons
						name="remove"
						size={32}
						color="white"
					/>
				</Pressable>
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
