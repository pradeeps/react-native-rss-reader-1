import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import FeedList from '../components/FeedList';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FeedList entries={this.props.route.params.entries} />
      </View>
    );
  }
}

ProfileScreen.route = {
  navigationBar: {
    visible: true,
    title(params) {
      return params.title;
    },
    backgroundColor: Colors.dark,
    tintColor: '#FFF'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  }
});

export default ProfileScreen;
