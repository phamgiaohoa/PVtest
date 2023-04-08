import {StyleSheet} from 'react-native';
import {theme} from './src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  pressableLeft: {
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderColor: theme.colors.lightGray,
  },
  ItemContainer: {
    // padding: 10,
    margin: 24,
    borderRadius: 8,
  },
  ItemViewTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemCheckType: {
    borderWidth: 2,
    borderRadius: 90,
    width: 10,
    height: 10,
    marginRight: 10,
  },
  ItemTextTime: {
    color: 'black',
    opacity: 0.2,
  },
  ItemTextTitle: {
    color: 'black',
    marginTop: 6,
  },
  ItemTextContent: {
    color: 'black',
    opacity: 0.2,
    width: '75%',
    marginTop: 6,
  },
  ItemShowMore: {
    color: 'black',
    opacity: 0.2,
    paddingRight: 100,
    marginTop: 12,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    alignItems: 'center',
    marginTop: 20,
  },
  modalHeaderText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    padding: 10,
    color: 'black',
  },
  input2: {
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
  },
  inputDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    paddingVertical: 12,
    paddingRight: 6,
  },
  viewTime: {flexDirection: 'row'},
  inputStart: {
    width: '46%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
  },
  textTime: {
    color: '#E6E6E6',
    fontFamily: 'bold',
    marginLeft: 20,
  },

  inputEnd: {
    width: '46%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    paddingVertical: 12,
  },
  viewReminds: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 12,
  },
  textReminds: {
    color: '#E6E6E6',
    fontFamily: 'bold',
  },
  textSelect: {color: '#E6E6E6', fontFamily: 'bold', margin: 12},
  viewType: {
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressableType: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewType2: {
    borderWidth: 2,
    borderRadius: 90,
    width: 10,
    height: 10,
    marginRight: 10,
  },
  add: {
    margin: 12,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#735BF2',
    justifyContent: 'center',
  },
});