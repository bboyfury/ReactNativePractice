// import React,{Component} from 'react';
// import {AsyncStorage, StyleSheet,Vibration,Image,TouchableOpacity,ScrollView, View,Text, Button, Alert, AppRegistry,Slider,TextInput } from 'react-native';
// import { captureScreen } from "react-native-view-shot";
// const DURATION = 10000 ;
// const PATTERN = [ 1000, 2000, 3000, 4000] ;
// export default class App extends React.Component {
  

//   _onPress() {
//     Alert.alert(' اولن اپلیکیشن علیرضا به همین راحتی!');
//    }

//    StartVibrationFunction=()=>{
 
//     // Device Will Vibrate for 10 seconds.
//     Vibration.vibrate(DURATION) ;
 
//     // Android Device Will Vibrate in pattern : Wait 1sec -> vibrate 2sec -> wait 3sec.
//     // iOS Device Will Vibrate in pattern : Wait 1sec -> Vibrate -> wait 2sec -> Vibrate -> wait 3sec -> Vibrate
    
//     // Vibration.vibrate(PATTERN)
 
 
//     // Android Device Will Vibrate in above pattern Infinite Time.
//     // iOS Device Will Vibrate in above pattern Infinite Time.
    
//     // Vibration.vibrate(PATTERN, true)
 
//   }
 
//   StopVibrationFunction=()=>{
    
//     // Stop Vibration.
//     Vibration.cancel();
 
 
//   }
 
//   setValueLocally=()=>{
 
//     AsyncStorage.setItem('Key_27', this.state.textInputData);
 
//     Alert.alert("ثبت شد  .")
 
//   }
//   etValueLocally=()=>{
 
//     AsyncStorage.getItem('Key_27').then((value) => this.setState({ getValue : value }))
 
//   }

//    captureScreenFunction=()=>{
 
//     captureScreen({
//       format: "jpg",
//       quality: 0.8
//     })
//     .then(
//       uri => this.setState({ imageURI : uri }),
//       error => console.error("Oops, Something Went Wrong", error)
//     );
 
//   }
//   constructor(props){

//     super(props);
//     this.state = { count: 0 }
//     this.state = {text: ''};
//     this.state={
  
//       textInputData : '',
 
//       getValue : ''
  
//     }
// this.state = {isShowingText: true};


// // Toggle the state every second
// setInterval(() => {
//   this.setState(previousState => {
//     return { isShowingText: !previousState.isShowingText };
//   });
// }, 1000);
 

  
//     this.state ={
//       imageURI : 'http://reactapp.ir/wp-content/uploads/motorcycle.jpg',
//      SliderValue :  0
  
//     }
  
//   }
//   onPress = () => {
  
//     this.setState({
//       count: this.state.count+1
//     })
//   }
//   render() {
//     let display = this.state.isShowingText ? this.props.text : 'اینتروال ';

//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (

//       <ScrollView>

//       <View style={styles.container}>



//   <TextInput
             
//              placeholder="Enter Some Text here"
         
//              onChangeText={ data => this.setState({textInputData : data}) }
 
//              underlineColorAndroid='transparent'
         
//              style={styles.TextInputStyle}
//            />
      
//       <TouchableOpacity onPress={this.setValueLocally} activeOpacity={0.7} style={styles.button} >
 
//           <Text style={styles.buttonText}> SAVE VALUE LOCALLY </Text>
 
//       </TouchableOpacity>
 
//       <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} style={styles.button} >
 
//          <Text style={styles.buttonText}> GET VALUE LOCALLY SAVED </Text>
 
//       </TouchableOpacity>
 
//       <Text style={styles.text}> { this.state.getValue } </Text>
 

//  <TextInput
//           style={{height: 40, width:300}}
//           placeholder="متن موردنظر"
//           placeholderTextColor='hotpink'
         
      
//           onChangeText={(text) => this.setState({text})}
//         />

//  <TouchableOpacity
//          style={styles.button}
//          onPress={this.onPress}
//        >
//          <Text> Touch Here </Text>
//        </TouchableOpacity>
//        <View style={[styles.countContainer]}>
//          <Text style={[styles.countText]}>
//             { this.state.count !== 0 ? this.state.count: null}
//           </Text>
//         </View>
       
//         <Text style={{padding: 10, fontSize: 42}}>
//           {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
//         </Text>

//       <Image source={pic} style={{width: 193, height: 110}}/>
//       {/* <Text>{display}</Text> */}
  
//       <View style={{flex: 1, flexDirection: 'row'}}>
//  <View style={{margin: 10}}>
   
//      <Button title = " تست ویبره  " onPress={this.StartVibrationFunction} />

//  </View>
 
//  <View style={{margin: 10}}>

//      <Button title = "  stop  " onPress = {this.StopVibrationFunction} />

//  </View></View>





//  <Text style = {{fontSize: 20}}>مقدار= { this.state.SliderValue }</Text>

//   <Slider
//           step = { 1 }
//           minimumValue = { 0 }
//           maximumValue = { 100 }
//           minimumTrackTintColor = "#009688"
//           onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })}
//           style = {{ width: '100%' }} 
//           />

          
//       <Button onPress={this._onPress} title="بزن روش" color="red" fontSize={this.state.SliderValue} accessibilityLabel="Tap on Me"/>

//  <Button title="اسکرینشات  " onPress={this.captureScreenFunction} />
 
//  <Image source={{uri : this.state.imageURI}} style={{width: 10, height: 10, resizeMode: 'contain', marginTop: 5}} />
  

//  <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{width: 100, height: 50, backgroundColor: 'red'}} />
//         <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 100, height: 50, backgroundColor: 'pink'}} >
// <Text style={{color:'blue'}}>{display}</Text> 
//         </View>
//       </View>


//  {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'red'}} />
//      */}
 
//       </View>

// </ScrollView>
      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding:10,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF'
//   },
//   buttonContainer: {
//     backgroundColor: '#2E9298',
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 3
//     },
//     shadowRadius: 10,
//     shadowOpacity: 0.25
//   }
// })









/////////////////////////////////////////



// import React,{Component} from 'react';
// import { StyleSheet, View, AsyncStorage, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
 
// export default class Project extends Component {
 
 
//   constructor()
//   {
//     super();
  
//     this.state={
  
//       textInputData : '',
 
//       getValue : ''
  
//     }
//   }
 
//   setValueLocally=()=>{
 
//     AsyncStorage.setItem('Key_27', this.state.textInputData);
 
//     Alert.alert("ثبت شد")
 
//   }
 
//   getValueLocally=()=>{
 
//     AsyncStorage.getItem('Key_27').then((value) => this.setState({ getValue : value }))
 
//   }
  
//   render() {
   
//     return (
 
//       <View style={styles.MainContainer}>
 
 
//       <TextInput
             
//              placeholder="مقدار"
         
//              onChangeText={ data => this.setState({textInputData : data}) }
 
//              underlineColorAndroid='transparent'
         
//              style={styles.TextInputStyle}
//            />
      
//       <TouchableOpacity onPress={this.setValueLocally} activeOpacity={0.7} style={styles.button} >
 
//           <Text style={styles.buttonText}> ذخیره کن </Text>
 
//       </TouchableOpacity>
 
//       <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} style={styles.button} >
 
//          <Text style={styles.buttonText}> چک کردن </Text>
 
//       </TouchableOpacity>
 
//       <Text style={styles.text}> { this.state.getValue } </Text>
 
 
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
 
// MainContainer :{
// justifyContent: 'center',
// alignItems: 'center',
// flex:1,
// margin: 10
 
// },
 
// TextInputStyle:{
 
//   textAlign: 'center',
//   height: 40,
//   width: '100%',
//   borderWidth: 1, 
//   borderColor: '#028b53',
//   borderRadius: 10
// },
 
// button: {
    
//   width: '100%',
//   height: 40,
//   padding: 10,
//   backgroundColor: '#4CAF50',
//   borderRadius:7,
//   marginTop: 10
// },
 
// buttonText:{
//   color:'#fff',
//   textAlign:'center',
// },
 
// text:{
 
//   fontSize: 20,
//   textAlign: 'center'
// }
 
// });


/////////////////////////////////









// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Platform, PanResponder, Animated, Dimensions } from 'react-native';
 
// const DEVICE_WIDTH = Dimensions.get('window').width;
 
// class TinderCard extends Component<{}>
// {
//   constructor()
//   {
//     super();
 
//     this.panResponder;
 
//     this.state = { xValue: new Animated.Value(0), showLeftSwipeText: false, showRightSwipeText: false }
 
//     this.cardOpacity = new Animated.Value(1);
//   }
 
//   componentWillMount()
//   {
//     this.panResponder = PanResponder.create(
//     {
//       onStartShouldSetPanResponder: (evt, gestureState) => false,
 
//       onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
 
//       onMoveShouldSetPanResponder: (evt, gestureState) => true,
 
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
 
//       onPanResponderMove: (evt, gestureState) =>
//       {
//         this.state.xValue.setValue(gestureState.dx);
 
//         if( gestureState.dx > DEVICE_WIDTH - 250 )
//         {
//           this.setState({ showRightSwipeText: true, showLeftSwipeText: false });
//         }
//         else if( gestureState.dx < -DEVICE_WIDTH + 250 )
//         {
//           this.setState({ showLeftSwipeText: true, showRightSwipeText: false });
//         }
//       },
 
//       onPanResponderRelease: (evt, gestureState) =>
//       {
//         if( gestureState.dx < DEVICE_WIDTH - 150 && gestureState.dx > -DEVICE_WIDTH + 150 )
//         {
//           this.setState({ showLeftSwipeText: false, showRightSwipeText: false });
 
//           Animated.spring( this.state.xValue,
//           {
//             toValue: 0,
//             speed: 5,
//             bounciness: 10,
//           }, { useNativeDriver: true }).start();
//         }
//         else if( gestureState.dx > DEVICE_WIDTH - 150 )
//         {
//           Animated.parallel(
//           [          
//             Animated.timing( this.state.xValue,
//             {
//               toValue: DEVICE_WIDTH,
//               duration: 200
//             }),
 
//             Animated.timing( this.cardOpacity,
//             {
//               toValue: 0,
//               duration: 200
//             })
//           ], { useNativeDriver: true }).start(() =>
//           {
//             this.setState({ showLeftSwipeText: false, showRightSwipeText: false }, () =>
//             {
//               this.props.removeCard();
//             });
//           });          
//         }
//         else if( gestureState.dx < -DEVICE_WIDTH + 150 )
//         {
//           Animated.parallel(
//           [          
//             Animated.timing( this.state.xValue,
//             {
//               toValue: -DEVICE_WIDTH,
//               duration: 200
//             }),
 
//             Animated.timing( this.cardOpacity,
//             {
//               toValue: 0,
//               duration: 200
//             })
//           ], { useNativeDriver: true }).start(() =>
//           {
//             this.setState({ showLeftSwipeText: false, showRightSwipeText: false }, () =>
//             {
//               this.props.removeCard();
//             });
//           });          
//         }
//       }
//     });
//   }
 
//   render()
//   {
//     const rotateCard = this.state.xValue.interpolate(
//     {
//        inputRange: [-200, 0, 200],
//        outputRange: ['-20deg', '0deg', '20deg'],
//     });
 
//     return(
//       <Animated.View {...this.panResponder.panHandlers} style = {[ styles.card, { backgroundColor: this.props.item.backgroundColor, opacity: this.cardOpacity, transform: [{ translateX: this.state.xValue }, { rotate: rotateCard }]}]}>
//         <Text style = { styles.cardTitle }>{ this.props.item.title }</Text>
//         {
//           ( this.state.showLeftSwipeText )
//           ?
//             (<Text style = { styles.leftText }>Left</Text>)
//           :
//             null
//         }
//         {
//           ( this.state.showRightSwipeText )
//           ?
//             (<Text style = { styles.rightText }>Right</Text>)
//           :
//             null 
//         }
//       </Animated.View>
//     );
//   }
// }
 
// export default class App extends Component<{}>
// {
//   constructor()
//   {
//     super();
 
//     this.state = { cardsArray:
//     [
//       {
//         id: '1',
//         title: 'Card 1',
//         backgroundColor: '#039BE5'
//       },
 
//       {
//         id: '2',
//         title: 'Card 2',
//         backgroundColor: '#E65100'
//       },
 
//       {
//         id: '3',
//         title: 'Card 3',
//         backgroundColor: '#795548'
//       },
 
//       {
//         id: '4',
//         title: 'Card 4',
//         backgroundColor: '#0D47A1'
//       },
 
//       {
//         id: '5',
//         title: 'Card 5',
//         backgroundColor: '#546E7A'
//       }
//     ], showNoMoreCardsView: false };
//   }
 
//   componentDidMount()
//   {
//     this.setState({ cardsArray: this.state.cardsArray.reverse() });
    
//     if( this.state.cardsArray.length == 0 )
//     {
//       this.setState({ showNoMoreCardsView: true });
//     }
//   }
 
//   removeCard( id )
//   {
//     this.state.cardsArray.splice( this.state.cardsArray.findIndex( x => x.id == id ), 1 );
 
//     this.setState({ cardsArray: this.state.cardsArray }, () =>
//     {
//       if( this.state.cardsArray.length == 0 )
//       {
//         this.setState({ showNoMoreCardsView: true });
//       }
//     });
//   }
 
//   render()
//   {
//     return(
//       <View style = { styles.container }>
//       {
//         this.state.cardsArray.map(( item, key ) =>
//         (
//           <TinderCard item = { item } key = { key } removeCard = { this.removeCard.bind( this, item.id ) }/>
//         ))
//       }
//       {
//         ( this.state.showNoMoreCardsView )
//         ?
//           (<View style = { styles.container }>
//             <Text style = {{ fontSize: 20, color: 'black' }}>No More Cards</Text>
//            </View>)
//         :
//           null
//       }
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create(
// {
//   container:
//   {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
//   },
 
//   card:
//   {
//     width: '80%',
//     height: '50%',
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4
//   },
 
//   cardTitle:
//   {
//     color: 'white',
//     fontSize: 25 
//   },
 
//   leftText:
//   { 
//     position: 'absolute',
//     top: 20,
//     right: 30,
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 30,
//     backgroundColor: 'transparent'
//   },
 
//   rightText:
//   {
//     position: 'absolute',
//     top: 20,
//     left: 30,
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 30,
//     backgroundColor: 'transparent'
//   }
// });



////////////////////////////////////



