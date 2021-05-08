import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

interface Props {
  title: String;
  position: 'br' | 'bl';
  onPress: () => void;
}
export const Fab = ({title, onPress, position}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
      activeOpacity= {0.8}
        onPress={onPress}
        style={[
          styles.fabLocation,
          position == 'br' ? {right: 25} : {left: 25},
        ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position == 'br' ? {right: 25} : {left: 25},
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('red', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}> {title} </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  console.log(Platform.OS);

  return Platform.OS === 'ios' ? ios() : android();
};
const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
