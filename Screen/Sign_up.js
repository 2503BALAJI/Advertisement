import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Link} from '@react-navigation/native';
import { Screen } from 'react-native-screens';

const Sign_up = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.Header}> Registration </Text>
        <View style={styles.Container}>
        
        <View>
          <Text style={styles.InputText}>E-mail </Text>
          <TextInput placeholder="example@gmail.com" style={styles.Input} />

          <Text style={styles.InputText}> Password</Text>
          <TextInput
            placeholder="Enter your Password"
            style={styles.Input}
            secureTextEntry
          />
          <Text style={styles.InputText}>Confirm Password</Text>
          <TextInput
            placeholder="Enter your Password"
            style={styles.Input}
            secureTextEntry
          />
        </View>


        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}> Register </Text>
        </TouchableOpacity>

       


        <View style={{flexDirection: 'row', alignItems: 'center', marginTop:responsiveHeight(4)}}>

            <View style={{flex: 1, height: responsiveHeight(0.1), backgroundColor: 'black'}} />
            
                <Text style={{width:responsiveWidth(40), textAlign: 'center'}}> or Register with </Text>
                
            <View style={{flex: 1, height: responsiveHeight(0.1), backgroundColor: 'black'}} />

        </View>

        {/* Google sign in process  */}

        <View style={styles.parentbtmGoogle}>
          <TouchableOpacity style={styles.btnGoogle}>
            <Text style={{color:'black', padding:5}}> Google</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.accText}>
         <Text> Already hace an account,<Link to={{screen: 'Login'}} style={{color:'#8AAC75'}}> Login Here </Link> </Text>
               
        </View>


      


      </View>
      </View>
    </>
  )
}
const styles=StyleSheet.create({
  Header: {
    fontSize: responsiveFontSize(8),
    color: '#22714A',
    fontWeight: '800',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  Container: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 50,
    alignItems: 'center',
    paddingTop: responsiveHeight(1),
    alignItems: 'Stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
  InputText: {
    fontSize: responsiveFontSize(3),
  },
  Button: {
    height: responsiveHeight(7),
    width: '100%',
    backgroundColor: '#22714A',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    // paddingRight:10
  },
  ButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(3.5),
    padding: 5,
  },

  Input: {
    fontSize: 20,
    borderColor: '#2E0D06',
    paddingLeft: 20,
    marginBottom: 35,
    borderWidth: responsiveWidth(0.2),
  },
  btnGoogle:{
    height:responsiveHeight(5),
    width:responsiveWidth(20),
    // backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.3,
    borderRadius:5
    // padding:5
    
    
  },
  parentbtmGoogle:{
  alignItems:'center',
  marginTop:responsiveHeight(2),
  // borderWidth:1,
  },
  
 
})

export default Sign_up