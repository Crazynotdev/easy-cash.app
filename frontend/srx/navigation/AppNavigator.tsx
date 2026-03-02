import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@context/AuthContext';
import { COLORS } from '@config/theme';

// Auth Screens
import { SplashScreen } from '@screens/auth/SplashScreen';
import { OnboardingScreen } from '@screens/auth/OnboardingScreen';
import { LoginScreen } from '@screens/auth/LoginScreen';
import { RegisterScreen } from '@screens/auth/RegisterScreen';
import { ForgotPasswordScreen } from '@screens/auth/ForgotPasswordScreen';
import { PhoneVerificationScreen } from '@screens/auth/PhoneVerificationScreen';

// User Screens
import { HomeScreen } from '@screens/user/HomeScreen';
import { VideosScreen } from '@screens/user/VideosScreen';
import { GamesScreen } from '@screens/user/GamesScreen';
import { SurveysScreen } from '@screens/user/SurveysScreen';
import { ReferralScreen } from '@screens/user/ReferralScreen';
import { ProfileScreen } from '@screens/user/ProfileScreen';
import { WithdrawScreen } from '@screens/user/WithdrawScreen';
import { HistoryScreen } from '@screens/user/HistoryScreen';
import { LeaderboardScreen } from '@screens/user/LeaderboardScreen';
import { SettingsScreen } from '@screens/user/SettingsScreen';

// Admin Screens
import { AdminHomeScreen } from '@screens/admin/AdminHomeScreen';
import { AdminUsersScreen } from '@screens/admin/AdminUsersScreen';
import { AdminVideosScreen } from '@screens/admin/AdminVideosScreen';
import { AdminGamesScreen } from '@screens/admin/AdminGamesScreen';
import { AdminWithdrawalsScreen } from '@screens/admin/AdminWithdrawalsScreen';
import { AdminAdsScreen } from '@screens/admin/AdminAdsScreen';
import { AdminReportsScreen } from '@screens/admin/AdminReportsScreen';
import { AdminFraudScreen } from '@screens/admin/AdminFraudScreen';
import { AdminSettingsScreen } from '@screens/admin/AdminSettingsScreen';

export type RootStackParamList = {
  // Auth
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  PhoneVerification: { phoneNumber: string };
  
  // User
  MainTabs: undefined;
  Videos: undefined;
  Games: undefined;
  Surveys: undefined;
  Referral: undefined;
  Profile: undefined;
  Withdraw: undefined;
  History: undefined;
  Leaderboard: undefined;
  Settings: undefined;
  
  // Admin
  AdminTabs: undefined;
  AdminUsers: undefined;
  AdminVideos: undefined;
  AdminGames: undefined;
  AdminWithdrawals: undefined;
  AdminAds: undefined;
  AdminReports: undefined;
  AdminFraud: undefined;
  AdminSettings: undefined;
};

export type TabParamList = {
  Home: undefined;
  Videos: undefined;
  Games: undefined;
  Referral: undefined;
  Profile: undefined;
};

export type AdminTabParamList = {
  AdminHome: undefined;
  AdminUsers: undefined;
  AdminVideos: undefined;
  AdminGames: undefined;
  AdminWithdrawals: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const AdminTab = createBottomTabNavigator<AdminTabParamList>();

const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Videos') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          } else if (route.name === 'Games') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'Referral') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary.main,
        tabBarInactiveTintColor: COLORS.text.disabled,
        tabBarStyle: {
          backgroundColor: COLORS.background.card,
          borderTopColor: COLORS.border.light,
          height: 60,
          paddingBottom: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
      <Tab.Screen name="Games" component={GamesScreen} />
      <Tab.Screen name="Referral" component={ReferralScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AdminTabs = () => {
  return (
    <AdminTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'AdminHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AdminUsers') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'AdminVideos') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          } else if (route.name === 'AdminGames') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'AdminWithdrawals') {
            iconName = focused ? 'cash' : 'cash-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary.main,
        tabBarInactiveTintColor: COLORS.text.disabled,
        tabBarStyle: {
          backgroundColor: COLORS.background.card,
          borderTopColor: COLORS.border.light,
          height: 60,
          paddingBottom: 8,
        },
        headerShown: false,
      })}
    >
      <AdminTab.Screen name="AdminHome" component={AdminHomeScreen} />
      <AdminTab.Screen name="AdminUsers" component={AdminUsersScreen} />
      <AdminTab.Screen name="AdminVideos" component={AdminVideosScreen} />
      <AdminTab.Screen name="AdminGames" component={AdminGamesScreen} />
      <AdminTab.Screen name="AdminWithdrawals" component={AdminWithdrawalsScreen} />
    </AdminTab.Navigator>
  );
};

export const AppNavigator = () => {
  const { user, isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          // Auth Stack
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
          </>
        ) : user?.role === 'admin' || user?.role === 'super_admin' ? (
          // Admin Stack
          <>
            <Stack.Screen name="AdminTabs" component={AdminTabs} />
            <Stack.Screen name="AdminUsers" component={AdminUsersScreen} />
            <Stack.Screen name="AdminVideos" component={AdminVideosScreen} />
            <Stack.Screen name="AdminGames" component={AdminGamesScreen} />
            <Stack.Screen name="AdminWithdrawals" component={AdminWithdrawalsScreen} />
            <Stack.Screen name="AdminAds" component={AdminAdsScreen} />
            <Stack.Screen name="AdminReports" component={AdminReportsScreen} />
            <Stack.Screen name="AdminFraud" component={AdminFraudScreen} />
            <Stack.Screen name="AdminSettings" component={AdminSettingsScreen} />
          </>
        ) : (
          // User Stack
          <>
            <Stack.Screen name="MainTabs" component={UserTabs} />
            <Stack.Screen name="Videos" component={VideosScreen} />
            <Stack.Screen name="Games" component={GamesScreen} />
            <Stack.Screen name="Surveys" component={SurveysScreen} />
            <Stack.Screen name="Referral" component={ReferralScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Withdraw" component={WithdrawScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
