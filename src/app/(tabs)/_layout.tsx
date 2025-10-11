import { Tabs } from 'expo-router';
import FontAwesone from '@expo/vector-icons/FontAwesome';

export default function Layout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Counter',
					headerShadowVisible: false,
					tabBarIcon: ({ color }) => (
						<FontAwesone
							name="sort-numeric-asc"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="todos"
				options={{
					title: 'Todos',
					headerShadowVisible: false,
					tabBarIcon: ({ color }) => (
						<FontAwesone
							name="check-square"
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
