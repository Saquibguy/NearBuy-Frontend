import { router } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SellerProfileScreen() {
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

      <Text style={styles.title}>Shop Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.shopIcon}>
          <Text style={styles.shopIconText}>🏪</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.shopName}>
            City Tech Store
          </Text>

          <Text style={styles.category}>
            Electronics
          </Text>

          <Text style={styles.rating}>
            ★ 4.5 • 128 reviews
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          SHOP INFORMATION
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Shop Name</Text>
          <Text style={styles.value}>
            City Tech Store
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.value}>
            Electronics
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>
            +91 98765 43210
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>
            Andheri West
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Opening Hours</Text>
          <Text style={styles.value}>
            10 AM - 9 PM
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          SHOP MANAGEMENT
        </Text>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>
            ✏️ Edit Shop Details
          </Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>
            📍 Shop Location
          </Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/my-offers')}
        >
          <Text style={styles.menuText}>
            💰 My Offers
          </Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace('/role')}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>

      <Text style={styles.version}>
        NearBuy v1.0
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
    marginBottom: 22,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  shopIcon: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  shopIconText: {
    fontSize: 30,
  },

  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },

  shopName: {
    fontSize: 19,
    fontWeight: '800',
    color: '#111827',
  },

  category: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },

  rating: {
    fontSize: 13,
    color: '#F59E0B',
    fontWeight: '700',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
    marginBottom: 8,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  label: {
    fontSize: 14,
    color: '#6B7280',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    maxWidth: '60%',
    textAlign: 'right',
  },

  menuItem: {
    minHeight: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },

  arrow: {
    fontSize: 22,
    color: '#9CA3AF',
  },

  logoutButton: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  logoutText: {
    color: '#EF4444',
    fontSize: 15,
    fontWeight: '700',
  },

  version: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 20,
  },
});