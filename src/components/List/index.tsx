import {
  View,
  FlatList,
  StyleSheet,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from "react-native";

import { ITheme } from "../../constants/theme";
import { FC } from "react";

type ListProps<ItemT = any> = {
  theme: ITheme;
  data?: Array<ItemT>;
  item: ListRenderItem<ItemT> | null | undefined;
  style?: StyleProp<ViewStyle>;
};

export const List: FC<ListProps> = ({ data, item, style, theme }) => {
  return (
    <View style={style}>
      <FlatList
        contentContainerStyle={styles(theme).container}
        data={data}
        keyExtractor={() => Math.random().toString()}
        renderItem={item}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: { padding: theme.metrics.large },
  });
