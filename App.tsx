/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StatusBarStyle,
  Text,
  TextInput,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { images } from "./src/assets";
import { theme } from "./src/theme";
import { width } from "./src/utils/responsive";
import { Portal, Modal, Switch, Provider } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import { Alert } from "react-native";
import styles from "./AppStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);
  const [title, setTextTitle] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openType, setOpenType] = useState(0);
  const [type, setType] = useState(0);
  const [date, setDate] = useState("");
  const [end, setEnd] = useState("");
  const [start, setStart] = useState("");
  const [check, setCheck] = useState(true);
  const [showMore, setShowMore] = useState();
  const onPress = () => {
    setIsVisible(true);
  };

  const submitCheck = () => {
    if (content === "") {
      Alert.alert("Thông báo", "Bạn phải nhập Type the note here");
      return false;
    }
    if (title === "") {
      Alert.alert("Thông báo", "Bạn phải nhập Event name");
      return false;
    }
    if (date === "") {
      Alert.alert("Thông báo", "Bạn phải chọn thời gian ");
      return false;
    }
    if (start === "") {
      Alert.alert("Thông báo", "bạn phải chọn start time");
      return false;
    }

    if (end === "") {
      Alert.alert("Thông báo", "bạn phải chọn end time");
      return false;
    }
    if (type === 0) {
      Alert.alert("Thông báo", "bạn phải chọn select catgeory");
      return false;
    }

    return true;
  };
  const onPressAdd = () => {
    if (!submitCheck()) return;
    const dataAdd = {
      date: date,
      start: start,
      end: end,
      content: content,
      title: title,
      type: type,
      check: check,
    };
    setData(data.length === 0 ? [dataAdd] : [...data, dataAdd]);
    setIsVisible(false);
    setDate("");
    setCheck(true);
    setEnd("");
    setContent("");
    setStart("");
    setTextTitle("");
    setType(0);
  };
  function onToggleSwitch() {
    return setCheck(!check);
  }
  const datePicker = (
    <DatePicker
      modal
      mode={openType === 3 ? "date" : "time"}
      // minimumDate={new Date()}
      title={
        openType === 3
          ? "chọn ngày"
          : openType === 2
          ? "Thời gian bắt đầu"
          : "thời gian kết thúc"
      }
      textColor={"black"}
      locale="vi"
      open={openDate}
      date={new Date()}
      onConfirm={(date) => {
        setOpenDate(false);
        openType === 3
          ? setDate(date)
          : openType === 2
          ? setStart(date)
          : start === undefined
          ? Alert.alert("Bạn hãy chọn thời gian bắt đầu trước")
          : start < date
          ? setEnd(date)
          : Alert.alert("Thời giản kết thúc phải lớn hơn thời giản kết thúc");
      }}
      onCancel={() => {
        setOpenDate(false);
      }}
    />
  );
  const modal = () => {
    return (
      <Portal>
        <Modal
          visible={isVisible}
          onDismiss={() => {
            setIsVisible(false), setType(0);
          }}
          contentContainerStyle={{
            marginTop: width,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Add New Event</Text>
            </View>
            <TextInput
              placeholder="Event name*"
              placeholderTextColor="#E6E6E6"
              style={styles.input}
              onChangeText={(text) => setTextTitle(text)}
              value={title}
            />
            <View style={styles.input2}>
              <TextInput
                placeholder="Type the note here..."
                placeholderTextColor="#E6E6E6"
                editable
                multiline
                numberOfLines={5}
                onChangeText={(text) => setContent(text)}
                value={content}
                style={
                  Platform.OS === "ios"
                    ? { color: "black", marginLeft: 8 }
                    : { color: "black", paddingTop: 0 }
                }
              />
            </View>
            <Pressable
              onPress={() => {
                setOpenDate(true), setOpenType(3);
              }}
              style={styles.inputDate}
            >
              <Text
                style={
                  date === ""
                    ? styles.textTime
                    : { ...styles.textTime, color: "black" }
                }
              >
                {date === "" ? "Date" : moment(date).format("YYYY-MM-DD")}
              </Text>
              <Feather name="calendar" color={theme.colors.black} size={20} />
            </Pressable>
            <View style={styles.viewTime}>
              <Pressable
                onPress={() => {
                  setOpenDate(true), setOpenType(2);
                }}
                style={styles.inputStart}
              >
                <Text
                  style={
                    start === ""
                      ? styles.textTime
                      : { ...styles.textTime, color: "black" }
                  }
                >
                  {/* Start time */}
                  {start === "" ? "Start time" : moment(start).format("HH:mm")}
                </Text>
                <EvilIcons name="clock" color={theme.colors.black} size={30} />
              </Pressable>
              <Pressable
                onPress={() => {
                  setOpenDate(true), setOpenType(1);
                }}
                style={styles.inputEnd}
              >
                <Text
                  style={
                    end === ""
                      ? styles.textTime
                      : { ...styles.textTime, color: "black" }
                  }
                >
                  {/* End time */}
                  {end === "" ? " End time" : moment(end).format("HH:mm")}
                </Text>
                <EvilIcons name="clock" color={theme.colors.black} size={30} />
              </Pressable>
            </View>
            <View style={styles.viewReminds}>
              <Text style={styles.textReminds}>Reminds me</Text>
              <Switch value={check} onValueChange={onToggleSwitch} />
            </View>
            <View>
              <Text style={styles.textSelect}>Select Catgeory</Text>
              <View style={styles.viewType}>
                <Pressable
                  onPress={() => {
                    setType(1);
                  }}
                  style={
                    type === 1
                      ? {
                          ...styles.pressableType,
                          backgroundColor: "#EFEFFB",
                          borderColor: "#735BF2",
                          borderWidth: 2,
                        }
                      : {
                          ...styles.pressableType,
                          backgroundColor: "#EFEFFB",
                        }
                  }
                >
                  <View
                    style={{
                      ...styles.viewType2,
                      borderColor: "#735BF2",
                    }}
                  />
                  <Text style={{ color: "black" }}>Workout </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setType(2);
                  }}
                  style={
                    type === 2
                      ? {
                          ...styles.pressableType,
                          backgroundColor: "#CEF6D8",
                          borderColor: "#00B383",
                          borderWidth: 2,
                        }
                      : {
                          ...styles.pressableType,
                          backgroundColor: "#CEF6D8",
                        }
                  }
                >
                  <View
                    style={{
                      ...styles.viewType2,
                      borderColor: "#00B383",
                    }}
                  />
                  <Text style={{ color: "black" }}>Workout </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setType(3);
                  }}
                  style={
                    type === 3
                      ? {
                          ...styles.pressableType,
                          backgroundColor: "#CEF6D8",
                          borderColor: "#0095FF",
                          borderWidth: 2,
                        }
                      : {
                          ...styles.pressableType,
                          backgroundColor: "#CEE3F6",
                        }
                  }
                >
                  <View
                    style={{
                      ...styles.viewType2,
                      borderColor: "#0095FF",
                    }}
                  />
                  <Text style={{ color: "black" }}>Workout </Text>
                </Pressable>
              </View>
            </View>
            <Pressable
              onPress={() => {
                onPressAdd();
              }}
              style={styles.add}
            >
              <Text style={{ color: "black" }}>Create Event</Text>
            </Pressable>
          </View>
          {datePicker}
        </Modal>
      </Portal>
    );
  };
  const renderItem = (item: any) => {
    const dataItem = item.item;
    const index = item.index;
    return (
      <View style={styles.ItemContainer}>
        <View style={styles.ItemViewTime}>
          <View
            style={{
              ...styles.ItemCheckType,
              borderColor:
                dataItem.type !== 1
                  ? dataItem.type !== 2
                    ? theme.colors.green
                    : theme.colors.blue
                  : theme.colors.darkBlue,
            }}
          />
          <Text style={styles.ItemTextTime}>
            {moment(dataItem.date).format("MM/DD")}{" "}
            {moment(dataItem.start).format("HH:mm")}
            {" - "}
            {moment(dataItem.end).format("HH:mm")}
          </Text>
        </View>
        <View>
          <Text style={styles.ItemTextTitle}>{dataItem.title}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            numberOfLines={index === showMore ? 0 : 1}
            style={styles.ItemTextContent}
          >
            {dataItem.content}
          </Text>
          {index !== showMore && (
            <Pressable
              onPress={() => {
                setShowMore(index);
              }}
            >
              <Text style={styles.ItemShowMore}>view more</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  };
  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.pressableLeft}>
              <AntDesign name="left" color={theme.colors.black} size={20} />
            </Pressable>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: theme.colors.black }}>September</Text>
              <Text style={{ color: theme.colors.black, opacity: 0.4 }}>
                2021
              </Text>
            </View>
            <Pressable style={styles.pressableLeft}>
              <AntDesign name="right" color={theme.colors.black} size={20} />
            </Pressable>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={(_, index) => String(index)}
              style={{ flex: 1 }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Pressable
              onPress={() => {
                onPress();
              }}
            >
              <Image
                resizeMode="stretch"
                style={{ width: 50, height: 50 }}
                source={images.add}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>

      {modal()}
    </Provider>
  );
};

export default App;
