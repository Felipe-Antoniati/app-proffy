import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import landingImg from "../images/landing.png";
import studyIcon from "../images/icons/study.png";
import giveClassesIcon from "../images/icons/give-classes.png";
import heartIcon from "../images/icons/heart.png";

import api from "../services/api";

import styles from "../styles/pages/s_landing";

const Landing = () => {
  const navigation = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response: any) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigation.navigate("GiveClasses");
  }

  function handleNavigateToStudyPages() {
    navigation.navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>Oque deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas! {""}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
