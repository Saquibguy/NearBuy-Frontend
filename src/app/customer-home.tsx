import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CustomerHomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>NearBuy</Text>
          <Text style={styles.greeting}>Welcome back 👋</Text>
        </View>

        <TouchableOpacity onPress={() => router.replace('/role')}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>
          What are you looking for?
        </Text>

        <Text style={styles.subtitle}>
          Tell nearby shops what you need and let them compete for your order.
        </Text>

        <TouchableOpacity
          style={styles.postButton}
          onPress={() => router.push('/post-request')}
        >
          <Text style={styles.postButtonText}>
            + Post a Request
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        Your Recent Requests
      </Text>

      <View style={styles.requestCard}>
        <View>

            <TouchableOpacity
          style={styles.myRequestsButton}
  onPress={() => router.push('/my-requests')}
>
  <Text style={styles.myRequestsText}>
    View My Requests
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.profileButton}
  onPress={() => router.push('/customer-profile')}
>
  <Text style={styles.profileButtonText}>
    My Profile
  </Text>
</TouchableOpacity>

          <Text style={styles.product}>
            🎧 Bluetooth Headphones
          </Text>

          <Text style={styles.status}>
            3 offers received
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push('/offers')}
        >
          <Text style={styles.viewOffers}>
            View Offers →
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.requestCard}>
        <View>
          <Text style={styles.product}>
            🔊 Bluetooth Speaker
          </Text>

          <Text style={styles.waiting}>
            Waiting for offers
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Shop local. Compare better.
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },

  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2563EB',
  },

  greeting: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },

  logout: {
    color: '#EF4444',
    fontWeight: '600',
  },

  hero: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 30,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#111827',
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6B7280',
    marginTop: 10,
  },

  postButton: {
    height: 52,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  
  myRequestsButton: {
  height: 50,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#2563EB',
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},

myRequestsText: {
  color: '#2563EB',
  fontSize: 15,
  fontWeight: '700',
},

  postButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 15,
  },

  requestCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  product: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  status: {
    fontSize: 13,
    color: '#16A34A',
    marginTop: 6,
  },

  waiting: {
    fontSize: 13,
    color: '#F59E0B',
    marginTop: 6,
  },

  viewOffers: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '700',
  },

  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 13,
    marginTop: 35,
  },
});