import { StyleSheet, Text } from 'react-native';
import { use$ } from '@legendapp/state/react';
import { store$ } from '@lib/todo';

export default function TextTotal() {
	// Ces deux lignes sont équivalentes
	const total = use$(store$.total);

	const totalWithGet = store$.total.get();

	return <Text> Total : {total}</Text>;
}

const styles = StyleSheet.create({});
