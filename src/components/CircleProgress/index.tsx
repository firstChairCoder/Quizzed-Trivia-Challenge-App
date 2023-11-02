import { FC, useEffect, useRef } from "react";
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Svg, { G, Circle } from "react-native-svg";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface CircleProgressProps {
  percentage: number;
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  color: string;
  delay?: number;
  textColor?: string;
  max: number;
}

export const CircleProgress: FC<CircleProgressProps> = ({
  percentage,
  radius = 48,
  strokeWidth = 10,
  duration = 500,
  color,
  textColor = "white",
  max = 100,
}) => {
  const animated = useRef(new Animated.Value(0)).current;
  const circleRef = useRef(null);
  const inputRef = useRef<TextInput>();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  useEffect(() => {
    animation(percentage);
    animated.addListener(
      (v) => {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text: `${Math.round(v.value)}`,
          });
        }
        if (circleRef?.current) {
          // @ts-ignore -- TODO: fix type error
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      }
    );

    return () => {
      animated.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        {/* @ts-ignore -- TODO: fix type error */}
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color },
          styles.text,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});
