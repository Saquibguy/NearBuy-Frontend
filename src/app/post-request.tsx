import { router } from 'expo-router';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PostRequestScreen() {
  
   const submitRequest = () => {
  Alert.alert(
    'Request Posted!',
    'Nearby shops can now see your request and send you offers.',
    [
      {
        text: 'OK',
        onPress: () => router.replace('/customer-home'),
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

      <Text style={styles.title}>Post a Request</Text>

      <Text style={styles.subtitle}>
        Tell nearby shops exactly what you need.
      </Text>

      <Text style={styles.label}>Product Name</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Bluetooth Speaker"
        placeholderTextColor="#9CA3AF"
      />

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryRow}>
        {['Electronics', 'Fashion', 'Home', 'Other'].map(
          (category) => (
            <TouchableOpacity
              key={category}
              style={styles.category}
            >
              <Text style={styles.categoryText}>
                {category}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <Text style={styles.label}>What exactly do you need?</Text>

      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Describe the product, brand, size, features, etc."
        placeholderTextColor="#9CA3AF"
        multiline
      />

      <Text style={styles.label}>Your Budget</Text>

      <TextInput
        style={styles.input}
        placeholder="Maximum budget in ₹"
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Quantity</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. 1"
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Your Location</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Andheri West"
        placeholderTextColor="#9CA3AF"
      />

      <TouchableOpacity
        style={styles.postButton}
        onPress={submitRequest}
      >
        <Text style={styles.postButtonText}>
          Post My Request
        </Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Nearby shops will be able to respond with their offers.
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

  description: {
    height: 110,
    paddingTop: 14,
    textAlignVertical: 'top',
  },

  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 18,
  },

  category: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 15,
  },

  categoryText: {
    color: '#374151',
    fontWeight: '600',
  },

  postButton: {
    height: 54,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  postButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  note: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 15,
  },
});