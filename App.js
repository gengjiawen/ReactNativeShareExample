import React from 'react';
import { StyleSheet, Text, View, Button, Share } from 'react-native';
import ImagePicker from "react-native-image-crop-picker";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      image: null
    }
  }

  renderImage(image) {
    return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image}/>
  }

  render() {
    return (
      <View style={styles.container}>

      <Button
        title="Select Image"
        onPress={() => {
          ImagePicker.openPicker({
            width: 300,
            height: 250,
            cropping: true,
            includeBase64: true
          }).then(image => {
              console.log(image);
              this.setState({
                image: image.data
              })
          });
        }}/>

      {this.state.image ? this.renderImage(this.state.image) : null}
      <Button 
        title="Share"
        onPress={() => {
          
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
