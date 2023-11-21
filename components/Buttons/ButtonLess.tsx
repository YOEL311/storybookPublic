import { Button, StyleSheet, View } from 'react-native';

import { getIconSVG } from '../../assets';
export type ButtonProps = {
  onPress: () => void;
  text: string;
  isDisabled?: boolean;
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
});

export const MyButtonLess = (): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      {getIconSVG()}
      <Button title="kjkl" />
    </View>
  );
};
