import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CustomerRegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    // Name validation
    if (trimmedName.length < 2) {
      Alert.alert('Invalid Name', 'Please enter your full name.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
      Alert.alert('Invalid Name', 'Name can contain only letters and spaces.');
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Invalid Phone', 'Phone number must contain exactly 10 digits.');
      return;
    }

    // Password validation
    if (password.length < 8) {
      Alert.alert(
        'Weak Password',
        'Password must contain at least 8 characters.'
      );
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    Alert.alert(
      'Success',
      'Your registration form is valid!'
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity onPress={() => router.replace('/customer-login')}>
        <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>
        
      

      <Text style={styles.logo}>NearBuy</Text>

      <Text style={styles.title}>Create your account</Text>

      <Text style={styles.subtitle}>
        Join NearBuy and discover better local deals.
      </Text>

      {/* Full Name */}
      <Text style={styles.label}>Full Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#9CA3AF"
        value={name}
        onChangeText={(text) => {
          const cleanedText = text.replace(/[^a-zA-Z\s]/g, '');
          setName(cleanedText);
        }}
        autoCapitalize="words"
        maxLength={50}
      />

      {/* Email */}
      <Text style={styles.label}>Email</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* Phone */}
      <Text style={styles.label}>Phone Number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter 10-digit phone number"
        placeholderTextColor="#9CA3AF"
        value={phone}
        onChangeText={(text) => {
          const cleanedPhone = text.replace(/\D/g, '');
          setPhone(cleanedPhone);
        }}
        keyboardType="phone-pad"
        maxLength={10}
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Create a password"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Confirm Password */}
      <Text style={styles.label}>Confirm Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        placeholderTextColor="#9CA3AF"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Create Account */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>
          Already have an account?
        </Text>

        <TouchableOpacity onPress={() => router.replace('/customer-login')}>
        <Text style={styles.loginLink}> Sign In</Text>
        </TouchableOpacity>
          
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },

  content: {
    padding: 24,
    paddingBottom: 40,
  },

  back: {
    fontSize: 17,
    color: '#2563EB',
    marginTop: 15,
    marginBottom: 30,
  },

  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#6B7280',
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
  },

  button: {
    height: 52,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  loginText: {
    color: '#6B7280',
    fontSize: 14,
  },

  loginLink: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
});