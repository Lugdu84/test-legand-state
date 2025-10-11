import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

//crée une page de todos

export default function TodosScreen() {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
