import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Step1 = ({ onNext, formData, setFormData }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.stepContainer}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={formData.subject}
          onChangeText={(text) => setFormData({ ...formData, subject: text })}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write Feedback"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          value={formData.feedback}
          onChangeText={(text) => setFormData({ ...formData, feedback: text })}
        />
      </ScrollView>
      <TouchableOpacity 
        style={styles.button}
        onPress={onNext}
      >
        <Text style={styles.buttonText}>Add Feedback</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const Step2 = ({ onNext, formData, setFormData }) => {
  const [rating, setRating] = useState(0);

  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => setRating(index + 1)}
      >
        <Icon
          name={index < rating ? "star" : "star-outline"}
          size={40}
          color={index < rating ? "#E84B8A" : "#D1D1D1"}
          style={styles.star}
        />
      </TouchableOpacity>
    ));
  };

  const handleNext = () => {
    setFormData({ ...formData, rating });
    onNext();
  };

  return (
    <View style={styles.stepContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>
          How many Stars do you want to give to the Salon?
        </Text>
        <Text style={styles.ratingSubtitle}>
          select stars to add rating.
        </Text>
        <View style={styles.starsContainer}>
          {renderStars()}
        </View>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>Add Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const Step3 = ({ onFinish }) => {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.successContainer}>
        <View style={styles.checkCircle}>
          <Icon name="check" size={50} color="white" />
        </View>
        <Text style={styles.thankYouText}>
          Thank you for Your Feedback!
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={onFinish}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const FeedbackScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    feedback: '',
    rating: 0,
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleFinish = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Feedback</Text>
        <View style={{ width: 24 }} />
      </View>

      {step === 1 && (
        <Step1 
          onNext={handleNext}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 2 && (
        <Step2
          onNext={handleNext}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <Step3 onFinish={handleFinish} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  stepContainer: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 150,
    paddingTop: 16,
  },
  button: {
    backgroundColor: '#E84B8A',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  ratingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  ratingSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  star: {
    marginHorizontal: 8,
  },
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E84B8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});

export default FeedbackScreen; 