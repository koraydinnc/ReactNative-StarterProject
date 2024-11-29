import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import Loading from '../components/Loading';
export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false)



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={50}>
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/login.png')}
              style={styles.image}
            />
            <Text>Giriş Yap</Text>

            <Text>Email</Text>
            <TextInput
              onChangeText={setEmail}
              placeholder="Lütfen Email Adresinizi Girin"
              style={styles.textInputStyle}
              value={email}
              keyboardType="email-address"
            />

            <Text>Şifre</Text>
            <TextInput
              placeholder="Lütfen Şifrenizi Girin"
              onChangeText={setPassword}
              style={styles.textInputStyle}
              value={password}
              secureTextEntry
            />

            <Pressable
              onPress={() => setLoading(true)}
              style={({ pressed }) => [{ backgroundColor: pressed ? 'blue' : 'gray' }, styles.button]}>
              <Text style={{ color: 'white' }}>Giriş Yap</Text>
            </Pressable>

            <Text>{result}</Text>
          
            
          </View>
          {loading ? <Loading loading={setLoading} /> : null }

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    width:'100%'
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  image: {
    width: 100,
    height: 100,
    margin: 12,
  }
});
