import { router } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SellerRequestDetailsScreen() {
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

      <Text style={styles.title}>Customer Request</Text>

      <Text style={styles.subtitle}>
        Review the request before sending your offer.
      </Text>

      {/* Product */}

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>PRODUCT</Text>

        <Text style={styles.product}>
          🎧 Bluetooth Headphones
        </Text>

        <Text style={styles.description}>
          Wireless headphones with microphone
        </Text>
      </View>

      {/* Requirements */}

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>
          CUSTOMER REQUIREMENTS
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Budget</Text>
          <Text style={styles.value}>₹2,000</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Quantity</Text>
          <Text style={styles.value}>1</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Condition</Text>
          <Text style={styles.value}>New preferred</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.value}>Electronics</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>Andheri West</Text>
        </View>
      </View>

      {/* Customer */}

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>
          CUSTOMER
        </Text>

        <Text style={styles.customerName}>
          Customer
        </Text>

        <Text style={styles.customerInfo}>
          📍 Approximately 1.5 km away
        </Text>

        <Text style={styles.customerInfo}>
          🕒 Request posted today
        </Text>
      </View>

      {/* Make Offer */}

      <TouchableOpacity
        style={styles.offerButton}
        onPress={() => router.push('/make-offer')}
      >
        <Text style={styles.offerButtonText}>
          Make an Offer
        </Text>
      </TouchableOpacity>

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
    color: '#2563EB',
    fontSize: 17,
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

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },

  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
    marginBottom: 10,
  },

  product: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },

  description: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 7,
    lineHeight: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  label: {
    fontSize: 14,
    color: '#6B7280',
  },

  value: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    maxWidth: '55%',
    textAlign: 'right',
  },

  customerName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },

  customerInfo: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 8,
  },

  offerButton: {
    height: 54,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  offerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});