import { router } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function MyRequestsScreen() {
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

      <Text style={styles.title}>My Requests</Text>

      <Text style={styles.subtitle}>
        Track products you've asked nearby shops for.
      </Text>

      {/* Request 1 */}

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/request-details')}
      >
        <View style={styles.cardTop}>
          <Text style={styles.product}>
            🎧 Bluetooth Headphones
          </Text>

          <View style={styles.activeBadge}>
            <Text style={styles.activeText}>
              Active
            </Text>
          </View>
        </View>

        <Text style={styles.description}>
          Wireless headphones with microphone
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            Budget: ₹2,000
          </Text>

          <Text style={styles.info}>
            Qty: 1
          </Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.offers}>
            3 offers received
          </Text>

          <Text style={styles.view}>
            View →
          </Text>
        </View>
      </TouchableOpacity>

      {/* Request 2 */}

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/request-details')}
      >
        <View style={styles.cardTop}>
          <Text style={styles.product}>
            🔊 Bluetooth Speaker
          </Text>

          <View style={styles.waitingBadge}>
            <Text style={styles.waitingText}>
              Waiting
            </Text>
          </View>
        </View>

        <Text style={styles.description}>
          Portable speaker for home use
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            Budget: ₹3,500
          </Text>

          <Text style={styles.info}>
            Qty: 1
          </Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.waitingOffers}>
            No offers yet
          </Text>

          <Text style={styles.view}>
            View →
          </Text>
        </View>
      </TouchableOpacity>

      {/* Request 3 */}

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/request-details')}
      >
        <View style={styles.cardTop}>
          <Text style={styles.product}>
            ⌨️ Wireless Keyboard
          </Text>

          <View style={styles.completedBadge}>
            <Text style={styles.completedText}>
              Completed
            </Text>
          </View>
        </View>

        <Text style={styles.description}>
          Wireless keyboard for laptop
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            Budget: ₹1,500
          </Text>

          <Text style={styles.info}>
            Qty: 1
          </Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.completedOffers}>
            Offer accepted
          </Text>

          <Text style={styles.view}>
            View →
          </Text>
        </View>
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
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  product: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  description: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 8,
  },

  infoRow: {
    flexDirection: 'row',
    gap: 25,
    marginTop: 15,
  },

  info: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '600',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },

  offers: {
    color: '#16A34A',
    fontSize: 13,
    fontWeight: '700',
  },

  waitingOffers: {
    color: '#F59E0B',
    fontSize: 13,
    fontWeight: '700',
  },

  completedOffers: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '700',
  },

  view: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '700',
  },

  activeBadge: {
    backgroundColor: '#DCFCE7',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 8,
  },

  activeText: {
    color: '#16A34A',
    fontSize: 11,
    fontWeight: '700',
  },

  waitingBadge: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 8,
  },

  waitingText: {
    color: '#D97706',
    fontSize: 11,
    fontWeight: '700',
  },

  completedBadge: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 8,
  },

  completedText: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
  },
});