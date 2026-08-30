import { router } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function RequestDetailsScreen() {
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

      <Text style={styles.title}>Request Details</Text>

      {/* Product */}

      <View style={styles.card}>
        <Text style={styles.label}>PRODUCT</Text>

        <Text style={styles.product}>
          🎧 Bluetooth Headphones
        </Text>

        <Text style={styles.description}>
          Wireless headphones with microphone
        </Text>
      </View>

      {/* Request Information */}

      <View style={styles.card}>
        <Text style={styles.label}>REQUEST INFORMATION</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Budget</Text>
          <Text style={styles.infoValue}>₹2,000</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Quantity</Text>
          <Text style={styles.infoValue}>1</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Category</Text>
          <Text style={styles.infoValue}>Electronics</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Location</Text>
          <Text style={styles.infoValue}>Andheri West</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Posted</Text>
          <Text style={styles.infoValue}>Today</Text>
        </View>
      </View>

      {/* Status */}

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>
          Request Status
        </Text>

        <View style={styles.statusRow}>
          <View style={styles.dotActive} />

          <Text style={styles.statusText}>
            3 offers received
          </Text>
        </View>

        <Text style={styles.statusDescription}>
          Nearby shops have responded to your request.
        </Text>
      </View>

      {/* View Offers */}

      <TouchableOpacity
        style={styles.offerButton}
        onPress={() => router.push('/offers')}
      >
        <Text style={styles.offerButtonText}>
          View All Offers
        </Text>
      </TouchableOpacity>

      {/* Cancel */}

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>
          Cancel Request
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
    marginBottom: 22,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
  },

  product: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginTop: 10,
  },

  description: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 7,
    lineHeight: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  infoLabel: {
    fontSize: 14,
    color: '#6B7280',
  },

  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },

  statusCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#16A34A',
    marginRight: 9,
  },

  statusText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#16A34A',
  },

  statusDescription: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 8,
    lineHeight: 19,
  },

  offerButton: {
    height: 54,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  offerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  cancelButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  cancelText: {
    color: '#EF4444',
    fontSize: 14,
    fontWeight: '600',
  },
});