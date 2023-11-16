import { StyleSheet, View } from 'react-native';
import { ButtonLess } from 'test-package-yoel-test';
export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  isDisabled?: boolean;
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    alignItems: 'flex-start',
    flex: 1,
  },
});

export const MyButtonLess = ({ text }: ButtonProps): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <ButtonLess width={300} text={text} />
    </View>
  );
};
