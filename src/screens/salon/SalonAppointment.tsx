import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

interface TimeSlot {
  time: string;
  available: boolean;
}

const AppointmentScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate time slots from 8 AM to 5:30 PM
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startTime = moment().set({ hour: 8, minute: 0 });
    const endTime = moment().set({ hour: 17, minute: 30 });

    while (startTime <= endTime) {
      slots.push({
        time: startTime.format('h:mmA'),
        available: Math.random() > 0.3, // Randomly set availability (70% available)
      });
      startTime.add(30, 'minutes');
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const renderTimeSlot = (slot: TimeSlot) => (
    <TouchableOpacity
      key={slot.time}
      style={[
        styles.timeSlot,
        !slot.available && styles.timeSlotDisabled,
        selectedTime === slot.time && styles.timeSlotSelected,
      ]}
      onPress={() => slot.available && setSelectedTime(slot.time)}
      disabled={!slot.available}
    >
      <Text
        style={[
          styles.timeSlotText,
          !slot.available && styles.timeSlotTextDisabled,
          selectedTime === slot.time && styles.timeSlotTextSelected,
        ]}
      >
        {slot.time}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Schedule</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>SELECT DATE</Text>
          <View style={styles.calendarContainer}>
            <Text style={styles.monthText}>July 2024</Text>
            <CalendarStrip
              scrollable
              style={styles.calendar}
              calendarColor={'white'}
              calendarHeaderStyle={styles.calendarHeader}
              dateNumberStyle={styles.dateNumber}
              dateNameStyle={styles.dateName}
              highlightDateNumberStyle={styles.highlightDateNumber}
              highlightDateNameStyle={styles.highlightDateName}
              disabledDateNameStyle={styles.disabledDateName}
              disabledDateNumberStyle={styles.disabledDateNumber}
              iconContainer={{ flex: 0.1 }}
              selectedDate={selectedDate}
              onDateSelected={setSelectedDate}
              startingDate={moment()}
              minDate={moment()}
              maxDate={moment().add(2, 'months')}
              highlightDateContainerStyle={styles.highlightDateContainer}
              showMonth={false}
              scrollerPaging
              dayContainerStyle={styles.dayContainer}
            />
          </View>
        </View>

        <View style={styles.timeContainer}>
          <View style={styles.timeHeaderContainer}>
            <Text style={styles.sectionTitle}>SELECT TIME</Text>
            <Text style={styles.duration}>duration 30min</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.timeSlotsGrid}>
              {timeSlots.map(renderTimeSlot)}
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Checkout')}
          style={[styles.continueButton, !selectedTime && styles.continueButtonDisabled]}
          disabled={!selectedTime}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
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
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  calendarSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  calendarContainer: {
    marginTop: 8,
  },
  monthText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    textAlign: 'left',
  },
  calendar: {
    height: 100,
    paddingBottom: 10,
  },
  calendarHeader: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  dateNumber: {
    color: '#000',
  },
  dateName: {
    color: '#666',
  },
  highlightDateContainer: {
    backgroundColor: '#E84B8A',
    borderRadius: 20,
  },
  highlightDateNumber: {
    color: 'white',
  },
  highlightDateName: {
    color: 'white',
  },
  disabledDateName: {
    color: '#DDDDDD',
  },
  disabledDateNumber: {
    color: '#DDDDDD',
  },
  timeContainer: {
    flex: 1,
    padding: 20,
  },
  timeHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  duration: {
    color: '#666',
    fontSize: 14,
  },
  timeSlotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlot: {
    width: '23%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
    alignItems: 'center',
  },
  timeSlotSelected: {
    backgroundColor: '#E84B8A',
    borderColor: '#E84B8A',
  },
  timeSlotDisabled: {
    backgroundColor: '#F5F5F5',
    borderColor: '#F5F5F5',
  },
  timeSlotText: {
    color: '#333',
    fontSize: 14,
  },
  timeSlotTextSelected: {
    color: 'white',
  },
  timeSlotTextDisabled: {
    color: '#CCCCCC',
  },
  continueButton: {
    backgroundColor: '#E84B8A',
    margin: 20,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dayContainer: {
    // Add any necessary styles for the day container
  },
});

export default AppointmentScreen;
