import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon, IconProps } from '@expo/vector-icons/build/createIconSet';

type IconNames = keyof typeof Ionicons.glyphMap;

type Props = {
	onPress?: () => void;
	iconName: IconNames;
};

export default function RoundedButton({ onPress, iconName }: Props) {
	console.log('RoundedButton render ...');
	return (
		<Pressable
			style={styles.button}
			onPress={onPress}>
			<Ionicons
				name={iconName}
				size={32}
				color="white"
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'blue',
		padding: 4,
		borderRadius: 30,
	},
});
