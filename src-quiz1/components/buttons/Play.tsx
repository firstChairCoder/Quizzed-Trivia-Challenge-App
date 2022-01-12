import React from "react";
import { AntDesign as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface PlayProps {
  onPress: () => void;
  active: boolean;
}

const Play = ({ onPress, active = false }: PlayProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={(active = false ? true : false)}
    >
      <Icon name={"play"} size={19} color={"white"} />
    </TouchableOpacity>
  );
};

export default Play;
