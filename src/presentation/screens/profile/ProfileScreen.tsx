import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../../config/app-theme";
import { useProfileStore } from "../../store/profile-store";

const ProfileScreen = () => {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const changeProfile = useProfileStore((state) => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: "Cristian Delgado" })}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() =>
          useProfileStore.setState({ email: "crideocdev@gmail.com" })
        }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() =>
          changeProfile('John Doe','jhon.doe@google.com')
        }>
        <Text>Regresar a John</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
