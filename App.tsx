import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const skills = [
  "React Native",
  "JavaScript",
  "UI/UX",
  "Node.js",
  "Git",
  "Teamwork",
];

export default function App() {
  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Image */}
          <Image
            source={require("./assets/saif.jpg")}
            style={styles.profileImage}
          />

          {/* Name and Bio */}
          <Text style={styles.name}>Saif Belloumi</Text>
          <Text style={styles.bio}>
            Passionate mobile and web developer, always seeking to build
            beautiful and functional applications.
          </Text>

          {/* Skills Section */}
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>

          {/* Action Button */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { transform: [{ scale: 0.97 }] },
            ]}
          >
            <LinearGradient
              colors={["#e6ece3ff", "#a5ac9eff"]}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Follow</Text>
            </LinearGradient>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 25,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 40,
  },
  skillBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    margin: 5,
  },
  skillText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  button: {
    borderRadius: 30,
    overflow: "hidden",
    width: 180,
  },
  buttonGradient: {
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
