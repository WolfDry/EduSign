import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../assets/styles/style";
import axios from "axios";
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

export function ProfilScreen() {
  const navigation = useNavigation();

  // const Profile = ({ user }) => {

  const handleLogout = () => {
    axios
      .post("url_api")
      .then((response) => {
        // remove token from local storage
        localStorage.removeItem("token");
        // redirect to the login route
        // navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  // change password
  const handleChangePassword = () => {
    navigation.navigate("ChangePasswordScreen");
  };
  return (
    <View style={globalStyles.fullScreen}>
      <View style={{ ...globalStyles.center, flex: 0.75 }}>
        <Image
          style={{ width: "25%", height: "30%" }}
          source={require("../assets/img/user.png")}
        />
      </View>
      <View style={{ alignItems: "center", width:'100%' }}>
        <Text style={{ fontSize: 35, fontWeight: 800 }}>
          Jean François Régis SIMBARE
        </Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <View style={styles.userInfo}>
          <Text style={styles.label}>User name</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.info}>jfsimbare</Text>
            <Icon type="ionicon" name="lock-closed-outline" size={17} />
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Email</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.info}>jeanf.simbare@example.com</Text>
            <Icon type="ionicon" name="lock-closed-outline" size={17} />
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.info}>********</Text>
            <TouchableOpacity onPress={handleChangePassword}>
              <Icon type="ionicon" name="pencil" size={17} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*  text log out with a link*/}
      <View style={styles.logout}>
        <TouchableOpacity onPress={handleLogout}>
          <Text
            style={{
              fontSize: 20,
              color: "red",
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
    color: "gray",
  },
  info: {
    fontSize: 18,
    color: "#000000",
  },
  logout: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
});
