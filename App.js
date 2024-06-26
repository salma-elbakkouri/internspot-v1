import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SkipLoginInterestPage from './pages/SkipLoginInterestPage';
import HomePage from './pages/HomePage';
import SavedPage from './pages/SavedPage';
import ApplicationPage from './pages/ApplicationPage';
import NotificationPage from './pages/NotificationPage';
import ProfilePage from './pages/ProfilePage';
import ProfilesetupPage from './pages/ProfilesetupPage';
import EducationPage from './pages/EducationPage';
import AddEducationPage from './pages/AddEducationPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import AddExperiencePage from './pages/AddExperiencePage';
import ProfilecreatedPage from './pages/ProfilecreatedPage';
import OfferdetailPage from './pages/OfferdetailPage';
import ApplicationdetailPage from './pages/ApplicationdetailPage';
import MessagereceiverPage from './pages/MessagereceiverPage';
import ApplyFormPage from './pages/ApplyFormPage';
import FilterOffersPage from './pages/FilterOfferPage';
import ApplyWebView from './pages/ApplyWebView';
import { auth } from './config/firebase';
import FilterOptionsPage from './pages/FilterOptionsPage'; 
import FilterOffersResults from './pages/FilterOffersResults';
import EditProfilePage from './pages/EditProfilePage';
import EditEducationPage from './pages/EditEducationPage';
import EditExperiencePage from './pages/EditExperiencePage';
import ApplicationOfferDetail from './pages/ApplicationOfferDetail';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ title: 'Welcome Page' }} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="SkipLoginInterestPage" component={SkipLoginInterestPage} />
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="Saved" component={SavedPage} options={{ title: 'SavedPage' }} />
        <Stack.Screen name="Application" component={ApplicationPage} options={{ title: 'ApplicationPage' }} />
        <Stack.Screen name="Notification" component={NotificationPage} options={{ title: 'NotificationPage' }} />
        <Stack.Screen name="Profile" component={ProfilePage} options={{ title: 'ProfilePage' }} />
        <Stack.Screen name="ProfilesetupPage" component={ProfilesetupPage}  />
        <Stack.Screen name="EducationPage" component={EducationPage}  />
        <Stack.Screen name="AddEducationPage" component={AddEducationPage}  />
        <Stack.Screen name="ExperiencePage" component={ExperiencePage}  />
        <Stack.Screen name="SkillsPage" component={SkillsPage}  />
        <Stack.Screen name="AddExperiencePage" component={AddExperiencePage}  />
        <Stack.Screen name="ProfilecreatedPage" component={ProfilecreatedPage}  />
        <Stack.Screen name="OfferdetailPage" component={OfferdetailPage}  />
        <Stack.Screen name="ApplicationdetailPage" component={ApplicationdetailPage}  />
        <Stack.Screen name="MessagereceiverPage" component={MessagereceiverPage}  />
        <Stack.Screen name="ApplyFormPage" component={ApplyFormPage}  />
        <Stack.Screen name="ApplyWebView" component={ApplyWebView} />
        <Stack.Screen name="FilterOffersPage" component={FilterOffersPage} />
        <Stack.Screen name="FilterOptionsPage" component={FilterOptionsPage} />
        <Stack.Screen name="FilterOffersResults" component={FilterOffersResults} />
        <Stack.Screen name="EditProfilePage" component={EditProfilePage} />
        <Stack.Screen name="EditEducationPage" component={EditEducationPage} />
        <Stack.Screen name="EditExperiencePage" component={EditExperiencePage} />
        <Stack.Screen name="ApplicationOfferDetail" component={ApplicationOfferDetail} />
        <Stack.Screen name="Forgot" component={ForgotPasswordPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated, redirect to Home
        navigation.replace('Home');
      } else {
        // No user is authenticated, redirect to Welcome after a delay
        setTimeout(() => {
          navigation.replace('Welcome');
        }, 2000);
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // setTimeout(() => {
  //   navigation.navigate('Welcome');
  // }, 2000);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('./assets/applogo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0047d2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});