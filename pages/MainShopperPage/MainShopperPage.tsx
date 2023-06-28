import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CardsScroll, Header, SearchBox } from "../../ui/";

interface MainShopperPageProps {
  navigation: any;
}

export function MainShopperPage({ navigation }: MainShopperPageProps) {
  // TODO: Get id list of available products using a request and remove
  // the block of code below.
  const dummyCards = Array.from({ length: 30 }).map((_, i) => {
    return {
      productID: `${i}`,
    };
  });

  const [filter, setFilter] = useState("");

  return (
    <View style={styles.container}>
      <Header>Escolha sua próxima broca</Header>
      <SearchBox inputProps={{ onChangeText: setFilter }} />
      <CardsScroll navigation={navigation} productsIDlist={dummyCards} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
  },

  topBar: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },

  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
