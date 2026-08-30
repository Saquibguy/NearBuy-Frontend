import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SellerHomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>NearBuy</Text>
          <Text style={styles.shopName}>Sharma Electronics</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.replace('/role')}
        >
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Nearby Customer Requests
      </Text>

      <Text style={styles.subtitle}>
        Find customers looking for products you sell.
      </Text>

      {/* Request Card */}

      <View style={styles.requestCard}>
        <View style={styles.requestHeader}>
          <Text style={styles.product}>
            🎧 Bluetooth Headphones
          </Text>

          <Text style={styles.distance}>
            1.2 km
          </Text>
        </View>

        <Text style={styles.detail}>
          Customer needs: Wireless headphones with microphone
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            Budget: ₹2,000
          </Text>

          <Text style={styles.info}>
            Qty: 1
          </Text>
        </View>

        <Text style={styles.location}>
          📍 Andheri West
        </Text>

        <TouchableOpacity
          style={styles.offerButton}
          onPress={() => router.push('/seller-request-details')}
        >
          <Text style={styles.offerButtonText}>
            Make an Offer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Second Request */}

      <View style={styles.requestCard}>
        <View style={styles.requestHeader}>
          <Text style={styles.product}>
            🔊 Bluetooth Speaker
          </Text>

          <Text style={styles.distance}>
            2.4 km
          </Text>
        </View>

        <Text style={styles.detail}>
          Customer needs: Portable speaker for home use
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            Budget: ₹3,500
          </Text>

          <Text style={styles.info}>
            Qty: 1
          </Text>
        </View>

        <Text style={styles.location}>
          📍 Jogeshwari
        </Text>

        <TouchableOpacity
          style={styles.offerButton}
          onPress={() => router.push('/make-offer')}
        >
          <Text style={styles.offerButtonText}>
            Make an Offer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Third Request */}

      <View style={styles.requestCard}>
        <View style={styles.requestHeader}>
          <Text style={styles.product}>
            ⌨️ Wireless Keyboard
          </Text>

          <Text style={styles.distance}>
            3.1 km
          </Text>
        </View>

        <Text style={styles.detail}>
          Customer needs: Wireless keyboard for laptop
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            Budget: ₹1,500
          </Text>

          <Text style={styles.info}>
            Qty: 1
          </Text>
        </View>

        <Text style={styles.location}>
          📍 Goregaon
        </Text>

        <TouchableOpacity
          style={styles.offerButton}
          onPress={() => router.push('/make-offer')}
        >
          <Text style={styles.offerButtonText}>
            Make an Offer
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
  style={styles.profileButton}
  onPress={() => router.push('/seller-profile')}
>
  <Text style={styles.profileButtonText}>
    Shop Profile
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 35,
  },

  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2563EB',
  },

  shopName: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },

  profileButton: {
  height: 50,
  backgroundColor: '#111827',
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},

profileButtonText: {
  color: '#FFFFFF',
  fontSize: 15,
  fontWeight: '700',
},

  logout: {
    color: '#EF4444',
    fontSize: 14,
    fontWeight: '600',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6B7280',
    marginTop: 8,
    marginBottom: 25,
  },

  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  product: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  distance: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  detail: {
    fontSize: 14,
    lineHeight: 21,
    color: '#6B7280',
    marginTop: 12,
  },

  infoRow: {
    flexDirection: 'row',
    gap: 25,
    marginTop: 15,
  },

  info: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },

  location: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 12,
  },

  offerButton: {
    height: 48,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  offerButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});