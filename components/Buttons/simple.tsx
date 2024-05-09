import { Canvas, Fill, RoundedRect, Shadow } from '@shopify/react-native-skia';

const Neumorphism = (): JSX.Element => {
  return (
    <Canvas style={{ width: 256, height: 256 }}>
      <Fill color="lightblue" />
      <RoundedRect
        x={32}
        y={32}
        width={192}
        height={192}
        r={32}
        color="lightblue">
        <Shadow dx={12} dy={12} blur={25} color="#93b8c4" inner />
        <Shadow dx={-12} dy={-12} blur={25} color="#c7f8ff" inner />
      </RoundedRect>
    </Canvas>
  );
};

export default Neumorphism;
