import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { Loading, CustomTextInput } from '../components';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/login.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Hoş Geldiniz</Text>
          <Text style={styles.subtitle}>Hesabınıza giriş yapın</Text>

          <CustomTextInput
            title="Email"
            placeholder="Email adresinizi girin"
            value={email}
            onChangeText={setEmail}
          />

          <CustomTextInput
            title="Şifre"
            placeholder="Şifrenizi girin"
            isSecureText
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            onPress={() => setLoading(true)}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#0056b3' : '#007BFF' },
            ]}
          >
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Signup')}
            style={({ pressed }) => [
              styles.secondaryButton,
              { backgroundColor: pressed ? '#d9d9d9' : '#f0f0f0' },
            ]}
          >
            <Text style={styles.secondaryButtonText}>Kayıt Ol</Text>
          </Pressable>

          <Text style={styles.resultText}>{result}</Text>
        </View>
        {loading && <Loading loading={setLoading} />}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    marginTop: 12,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 16,
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
});
