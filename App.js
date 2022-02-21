import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.grayRectangle}>
          <Image
            source={require("./assets/BG_rectangle.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.moviePresentation}>
        <View>
          <Text style={styles.title}>Interstellar</Text>
          <Text style={styles.subtitle}>
            2014 PG-13 2h49min Adventure, Drama, Sci-fi
          </Text>
          <View style={styles.movieDescription}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.cover}
              resizeMode="contain"
            />
            <View style={styles.colTextButton}>
              <Text style={styles.textDescription}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => {
                  console.log("pressed !");
                }}
              >
                <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.iconsRow}>
            <View style={styles.iconGen}>
              <View style={styles.icon}>
                <Entypo name="star" size={24} color="yellow" />
              </View>
              <View style={styles.rate}>
                <Text style={styles.bold}>8.6</Text>
                <Text style={styles.textDescription}>/10</Text>
              </View>
              <Text style={styles.textDescription}>1.1M</Text>
            </View>

            <View style={styles.iconGen}>
              <View style={styles.icon}>
                <AntDesign name="staro" size={24} color="white" />
              </View>
              <View style={styles.rate}>
                <Text style={styles.bold}>RATE THIS</Text>
              </View>
              <Text style={styles.textDescription}> </Text>
            </View>

            <View style={styles.iconGen}>
              <View style={styles.icon}>
                <MaterialIcons name="score" size={24} color="green" />
              </View>
              <View style={styles.rate}>
                <Text style={styles.bold}>Metascore</Text>
              </View>
              <Text style={styles.textDescription}>46 critic reviews</Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>

      <View style={styles.moviePresentation}>
        <View style={styles.titleRow}>
          <Text style={styles.castTitle}>Top Billed Cast</Text>
          <Text style={styles.blue}>SEE ALL</Text>
        </View>

        <ScrollView
          horizontal={true}
          height={200}
          // display="flex"
          // flexDirection="row"
          // justifyContent="space-evenly"
          style={styles.scrollview}
        >
          <View style={styles.charBox}>
            <Image
              source={require("./assets/matthew.jpg")}
              style={styles.cover}
              resizeMode="contain"
            />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              width={100}
              color="#fff"
              fontSize={18}
              flex={1}
              style={styles.characterName}
            >
              Matthew McConaughey
            </Text>
            <Text style={styles.subtitle}>Cooper</Text>
          </View>

          <View style={styles.charBox}>
            <Image
              source={require("./assets/anne.jpg")}
              style={styles.cover}
              resizeMode="contain"
            />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              width={100}
              style={styles.textDescription}
            >
              Anne Hathaway
            </Text>
            <Text style={styles.subtitle}>Brand</Text>
          </View>

          <View style={styles.charBox}>
            <Image
              source={require("./assets/jessica.jpg")}
              style={styles.cover}
              resizeMode="contain"
            />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              width={100}
              style={styles.textDescription}
            >
              Jessica Chastain
            </Text>
            <Text style={styles.subtitle}>Murphy</Text>
          </View>

          <View style={styles.charBox}>
            <Image
              source={require("./assets/mackenzie.jpg")}
              style={styles.cover}
              resizeMode="contain"
            />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              width={100}
              style={styles.textDescription}
            >
              Mackenzie Foy
            </Text>
            <Text style={styles.subtitle}>Murphy</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#000",
    flex: 1,
  },
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  grayRectangle: {
    backgroundColor: "#272727",
    height: 80,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 30 : 0, //StatusBar.currentHeight ne fonctionne pas??...
  },
  logo: {
    height: 60,
    width: 60,
  },

  moviePresentation: {
    backgroundColor: "#0f0f0f",
    marginTop: 10,
    marginHorizontal: 2,
    height: 350,
  },

  title: {
    fontSize: 35,
    color: "#fff",
    paddingBottom: 15,
  },

  subtitle: {
    fontSize: 16,
    color: "#aec5c5",
  },

  cover: {
    height: 180,
    width: 100,
    marginRight: 5,
  },

  movieDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textDescription: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },

  colTextButton: {
    flexDirection: "column",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#2792a5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 200,
    marginLeft: 10,
  },

  buttonText: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },

  iconsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconText: {
    fontSize: 10,
    color: "#fff",
  },

  bold: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },

  rate: {
    display: "flex",
    flexDirection: "row",
  },

  iconGen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  titleRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },

  castTitle: {
    fontSize: 22,
    color: "#fff",
  },

  blue: {
    color: "#2792a5",
  },

  scrollview: {
    // display: "flex",
    // flexDirection: "row",
  },

  charBox: {
    backgroundColor: "#171515",
    height: 230,
    width: 120,
    flex: 1,
  },

  characterName: {
    color: "#fff",
    fontSize: 16,
  },
});
