import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import AddHousemateScreen from './screens/AddHousemateScreen';
import ExpenseListScreen from './screens/ExpenseListScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Giriş Yap' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Kayıt Ol' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Şifremi Unuttum' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Menü' }} />
        <Stack.Screen name="AddHousemate" component={AddHousemateScreen} options={{ title: 'Ev Arkadaşı Ekle' }} />
        <Stack.Screen name="ExpenseList" component={ExpenseListScreen} options={{ title: 'Harcama Listesi' }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Harcama Ekle' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
