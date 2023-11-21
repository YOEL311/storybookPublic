import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Animation } from 'test-package-yoel-test';

export type ButtonProps = {
  onPress: () => void;
  text: string;
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});

function MyAnimation(): JSX.Element {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
    </>
  );
}

export const MyButtonLess = ({ text }: ButtonProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.buttonContainer}>
      <MyAnimation />
      <Animation />
    </View>
  );
};
