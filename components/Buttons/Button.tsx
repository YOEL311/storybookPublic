import { StyleSheet, Text, View } from 'react-native';

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

const Button = ({ text }: ButtonProps): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.box}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default Button;
