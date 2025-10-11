import { StyleSheet, Text } from 'react-native';
import { Memo, observer } from '@legendapp/state/react';
import { count$ } from './count';

export const Counter = observer(() => {
	return <Text>{count$.get()}</Text>;
});

const styles = StyleSheet.create({});
