import React from "react";
import { AntDesign as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface NextProps {
  onPress: () => void;
  active: boolean;
}

const Next = ({ onPress, active = false }: NextProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={(active = false ? true : false)}
    >
      <Icon name={"stepforward"} size={20} color={"white"} />
    </TouchableOpacity>
  );
};

export default Next;
