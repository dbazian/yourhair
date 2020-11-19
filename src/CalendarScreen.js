import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const CalendarScreen = (props) => {
  return (
    <View style={styles.full}>
      <Text style={styles.text}>CalenderScreen</Text>
      <CalendarList
        minDate={"2020-01-01"}
        maxDate={"2025-01-01"}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        monthFormat={"yyyy MM"}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        hideArrows={true}
        renderArrow={(direction) => <Arrow />}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => {}}
        enableSwipeMonths={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    paddingVertical: 100,
    height: "100%",
    backgroundColor: "pink",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default CalendarScreen;
