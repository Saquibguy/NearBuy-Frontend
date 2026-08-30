import { router } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function MyOffersScreen() {
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

      <Text style={styles.title}>My Offers</Text>

      <Text style={styles.subtitle}>
        Track the offers you have sent to customers.
      </Text>

      {/* Offer 1 */}

      <View style={styles.offerCard}>
        <View style={styles.topRow}>
          <View style={styles.productArea}>
            <Text style={styles.product}>
              🎧 Bluetooth Headphones
            </Text>

            <Text style={styles.customer}>
              Customer: Customer
            </Text>
          </View>

          <View style={styles.pendingBadge}>
            <Text style={styles.pendingText}>
              Pending
            </Text>
          </View>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹1,650</Text>

          <Text style={styles.condition}>
            New
          </Text>
        </View>

        <Text style={styles.details}>
          Customer budget: ₹2,000
        </Text>

        <Text style={styles.details}>
          Sent today
        </Text>
      </View>

      {/* Offer 2 */}

      <View style={styles.offerCard}>
        <View style={styles.topRow}>
          <View style={styles.productArea}>
            <Text style={styles.product}>
              ⌨️ Wireless Keyboard
            </Text>

            <Text style={styles.customer}>
              Customer: Customer
            </Text>
          </View>

          <View style={styles.acceptedBadge}>
            <Text style={styles.acceptedText}>
              Accepted
            </Text>
          </View>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹1,200</Text>

          <Text style={styles.condition}>
            New
          </Text>
        </View>

        <Text style={styles.details}>
          Customer budget: ₹1,500
        </Text>

        <Text style={styles.details}>
          Accepted today
        </Text>
      </View>

      {/* Offer 3 */}

      <View style={styles.offerCard}>
        <View style={styles.topRow}>
          <View style={styles.productArea}>
            <Text style={styles.product}>
              🔊 Bluetooth Speaker
            </Text>

            <Text style={styles.customer}>
              Customer: Customer
            </Text>
          </View>

          <View style={styles.rejectedBadge}>
            <Text style={styles.rejectedText}>
              Not Selected
            </Text>
          </View>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹3,200</Text>

          <Text style={styles.condition}>
            New
          </Text>
        </View>

        <Text style={styles.details}>
          Customer budget: ₹3,000
        </Text>

        <Text style={styles.details}>
          Sent yesterday
        </Text>
      </View>

      <Text style={styles.footer}>
        Keep your prices competitive to get more customers.
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

  offerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 15,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  productArea: {
    flex: 1,
    paddingRight: 10,
  },

  product: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
  },

  customer: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 6,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },

  price: {
    fontSize: 23,
    fontWeight: '800',
    color: '#111827',
  },

  condition: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '600',
  },

  details: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 7,
  },

  pendingBadge: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 8,
  },

  pendingText: {
    color: '#D97706',
    fontSize: 11,
    fontWeight: '700',
  },

  acceptedBadge: {
    backgroundColor: '#DCFCE7',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 8,
  },

  acceptedText: {
    color: '#16A34A',
    fontSize: 11,
    fontWeight: '700',
  },

  rejectedBadge: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 8,
  },

  rejectedText: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
  },

  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 15,
  },
});