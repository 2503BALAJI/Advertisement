import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Style from './Components/Style';

const Login = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.Header}> Login </Text>

        <View style={styles.Container}>
        
          <View>
            <Text style={styles.InputText}>E-mail </Text>
            <TextInput placeholder="Enter Your E-mail" style={styles.Input} />

            <Text style={styles.InputText}> Password</Text>
            <TextInput
              placeholder="Enter your Password"
              style={styles.Input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={{alignItems: 'flex-end'}}>
            <Link to={{screen: 'ForgotPass'}}> Forgot Password ?</Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}> Sign In </Text>
          </TouchableOpacity>

         


          <View style={{flexDirection: 'row', alignItems: 'center', marginTop:responsiveHeight(4)}}>

              <View style={{flex: 1, height: responsiveHeight(0.1), backgroundColor: 'black'}} />
              
                  <Text style={{width:responsiveWidth(25), textAlign: 'center'}}> or login with </Text>
                  
              <View style={{flex: 1, height: responsiveHeight(0.1), backgroundColor: 'black'}} />

          </View>

          {/* Google sign in process  */}

          <View style={styles.parentbtmGoogle}>
            <TouchableOpacity style={styles.btnGoogle}>
              <Text style={{color:'black', padding:5}}> Google</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.accText}>
           <Text> Doesn't have account yet </Text>
          </View>


          <TouchableOpacity style={styles.btnRegister}>
            <Link to={{screen: 'Sign_up'}} style={styles.TextRegister}> Register </Link>
          </TouchableOpacity>



        </View>
      </View>

    </>
  );
};

export default Login;



const styles = StyleSheet.create({
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
    paddingLeft: 5,
    paddingRight: 5,
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
  btnRegister:{
    height: responsiveHeight(7),
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0.3,
    marginTop: 4,
    // paddingRight:10
  },
  TextRegister:{
    color: 'black',
    fontSize: responsiveFontSize(3),
    padding: 5,
  },
  accText:{
    height:responsiveHeight(5),
    width:'100%',
    justifyContent:'center',
    marginVertical:10,
    // backgroundColor:'aqua',
    alignItems:'center'
  }
});
