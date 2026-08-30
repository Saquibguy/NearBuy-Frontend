import { router } from 'expo-router';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function OffersScreen() {
  const selectOffer = (shopName: string, price: string) => {
    Alert.alert(
      'Offer Selected',
      `${shopName} offered ${price}.\n\nYou can now visit the shop and complete your purchase.`,
      [
        {
          text: 'OK',
          onPress: () => router.push('/order-confirmation'),
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

      <Text style={styles.title}>Your Offers</Text>

      <Text style={styles.subtitle}>
        Compare offers from nearby local shops.
      </Text>

      {/* Request Summary */}

      <View style={styles.requestCard}>
        <Text style={styles.requestLabel}>
          YOUR REQUEST
        </Text>

        <Text style={styles.product}>
          🎧 Bluetooth Headphones
        </Text>

        <Text style={styles.requestDetail}>
          Budget: ₹2,000 • Quantity: 1
        </Text>
      </View>

      <Text style={styles.offerCount}>
        3 shops responded
      </Text>

      {/* Offer 1 */}

      <View style={styles.offerCard}>
        <View style={styles.shopHeader}>
          <View>
            <Text style={styles.shopName}>
              Sharma Electronics
            </Text>

            <Text style={styles.location}>
              📍 1.2 km away
            </Text>
          </View>

          <Text style={styles.rating}>
            ★ 4.7
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹1,799</Text>

          <Text style={styles.available}>
            Available today
          </Text>
        </View>

        <Text style={styles.condition}>
          New • Warranty available
        </Text>

        <TouchableOpacity
          style={styles.selectButton}
          onPress={() =>
            selectOffer('Sharma Electronics', '₹1,799')
          }
        >
          <Text style={styles.selectText}>
            Select Offer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Offer 2 */}

      <View style={styles.offerCard}>
        <View style={styles.shopHeader}>
          <View>
            <Text style={styles.shopName}>
              City Tech Store
            </Text>

            <Text style={styles.location}>
              📍 1.8 km away
            </Text>
          </View>

          <Text style={styles.rating}>
            ★ 4.5
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹1,650</Text>

          <Text style={styles.available}>
            Available today
          </Text>
        </View>

        <Text style={styles.condition}>
          New • 1 year warranty
        </Text>

        <TouchableOpacity
          style={styles.selectButton}
          onPress={() =>
            selectOffer('City Tech Store', '₹1,650')
          }
        >
          <Text style={styles.selectText}>
            Select Offer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Offer 3 */}

      <View style={styles.offerCard}>
        <View style={styles.shopHeader}>
          <View>
            <Text style={styles.shopName}>
              Mobile & More
            </Text>

            <Text style={styles.location}>
              📍 2.6 km away
            </Text>
          </View>

          <Text style={styles.rating}>
            ★ 4.3
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹1,850</Text>

          <Text style={styles.available}>
            Available tomorrow
          </Text>
        </View>

        <Text style={styles.condition}>
          New • Warranty available
        </Text>

        <TouchableOpacity
          style={styles.selectButton}
          onPress={() =>
            selectOffer('Mobile & More', '₹1,850')
          }
        >
          <Text style={styles.selectText}>
            Select Offer
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Buy from a nearby shop and support your local market.
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

  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 22,
  },

  requestLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
  },

  product: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginTop: 8,
  },

  requestDetail: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 6,
  },

  offerCount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  offerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 15,
  },

  shopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  shopName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  location: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 5,
  },

  rating: {
    fontSize: 13,
    fontWeight: '700',
    color: '#F59E0B',
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },

  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },

  available: {
    fontSize: 12,
    color: '#16A34A',
    fontWeight: '600',
  },

  condition: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 7,
  },

  selectButton: {
    height: 48,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  selectText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 20,
  },
});