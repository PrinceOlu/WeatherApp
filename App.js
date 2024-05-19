import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import Form from "./src/components/Form";
import { useState } from "react";
import Content from "./src/components/Content";

// Images for corresponding backgrounds
const images = {
  Clear: "http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg",
  Clouds:
    "https://www.princeton.edu/sites/default/files/styles/full_2x/public/images/2018/01/clouds-19.jpg?itok=7jputHX1",
  Rain: "https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg",
};

const App = () => {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  const fetchData = () => {
    fetchCityData(city);
  };

  const fetchCityData = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=appid&units=metric`;
      const apiCall = await fetch(url);
      const response = await apiCall.json();

      setCountryCode(response.sys.country);
      setTemp(response.main.temp);
      setWeather(response.weather[0].main);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  // const backgroundImage = images[weather] || "https://via.placeholder.com/400"; // Default image

  return (
    <View style={styles.container}>
      <Image source={{ uri: images[weather] }} style={styles.image} />
      <Form onChangeText={(text) => setCity(text)} onSubmit={fetchData} />
      <Content
        city={city}
        countryCode={countryCode}
        temp={temp}
        weather={weather}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});

export default App;
