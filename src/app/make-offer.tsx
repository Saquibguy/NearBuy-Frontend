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

export default function MakeOfferScreen() {
  const [condition, setCondition] = useState('New');
  const submitOffer = () => {
    Alert.alert(
      'Offer Sent!',
      'Your offer has been sent to the customer.',
      [
        {
          text: 'OK',
          onPress: () => router.replace('/seller-home'),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>‹ Back</Text>
      </TouchableOpacity>

      <Text style={styles.logo}>NearBuy</Text>

      <Text style={styles.title}>Make an Offer</Text>

      <Text style={styles.subtitle}>
        Send your best offer to the customer.
      </Text>

      {/* Customer Request */}

      <View style={styles.requestCard}>
        <Text style={styles.requestLabel}>
          CUSTOMER REQUEST
        </Text>

        <Text style={styles.product}>
          🎧 Bluetooth Headphones
        </Text>

        <Text style={styles.requestText}>
          Wireless headphones with microphone
        </Text>

        <View style={styles.row}>
          <Text style={styles.info}>
            Customer Budget
          </Text>

          <Text style={styles.budget}>
            ₹2,000
          </Text>
        </View>
      </View>

      {/* Offer Form */}

      <Text style={styles.label}>Your Price</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your price"
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Product Condition</Text>

      <View style={styles.conditionRow}>

  <TouchableOpacity
    style={
      condition === 'New'
        ? styles.conditionSelected
        : styles.condition
    }
    onPress={() => setCondition('New')}
  >
    <Text
      style={
        condition === 'New'
          ? styles.conditionSelectedText
          : styles.conditionText
      }
    >
      New
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={
      condition === 'Used'
        ? styles.conditionSelected
        : styles.condition
    }
    onPress={() => setCondition('Used')}
  >
    <Text
      style={
        condition === 'Used'
          ? styles.conditionSelectedText
          : styles.conditionText
      }
    >
      Used
    </Text>
  </TouchableOpacity>

    </View>

      <Text style={styles.label}>Availability</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Available today"
        placeholderTextColor="#9CA3AF"
      />

      <Text style={styles.label}>Pickup / Shop Address</Text>

      <TextInput
        style={[styles.input, styles.addressInput]}
        placeholder="Enter your shop address"
        placeholderTextColor="#9CA3AF"
        multiline
      />

      <Text style={styles.label}>Message to Customer</Text>

      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Add a short message..."
        placeholderTextColor="#9CA3AF"
        multiline
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitOffer}
      >
        <Text style={styles.submitText}>
          Send Offer
        </Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Your offer will be visible to the customer.
      </Text>
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
    paddingBottom: 50,
  },

  backButton: {
    marginTop: 10,
    marginBottom: 20,
  },

  backText: {
    fontSize: 17,
    color: '#2563EB',
    fontWeight: '600',
  },

  logo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2563EB',
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    marginTop: 25,
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 8,
    marginBottom: 25,
  },

  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 25,
  },

  requestLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
  },

  product: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111827',
    marginTop: 10,
  },

  requestText: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 7,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  info: {
    fontSize: 14,
    color: '#6B7280',
  },

  budget: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
    marginTop: 8,
  },

  input: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    marginBottom: 18,
  },

  conditionRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },

  conditionSelected: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: '#2563EB',
    borderRadius: 10,
  },

  conditionSelectedText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  condition: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  conditionText: {
    color: '#374151',
    fontWeight: '600',
  },

  addressInput: {
    height: 90,
    textAlignVertical: 'top',
    paddingTop: 14,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 14,
  },

  submitButton: {
    height: 54,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  note: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 15,
  },
});