import { StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'react-native';

const { height } = Dimensions.get('window'); // Get screen height for responsive design

const createCornerRadius = (tl, tr, br, bl) => ({
  borderTopLeftRadius: tl,
  borderTopRightRadius: tr,
  borderBottomRightRadius: br,
  borderBottomLeftRadius: bl,
});

// Example:


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B082C',
    overflow: 'hidden',
    justifyContent: 'center',  
  },

  top: {
    backgroundColor: '#0B082C',
    justifyContent: 'center',
    alignItems: 'center',

    //paddingBottom: 0,
    paddingRight: '10%',
    paddingLeft: '10%',
    height: 150,
    zIndex: 1,
  },
  top_text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  scan_btn: {
    backgroundColor: '#3D38D8',
    position: 'absolute', // Use absolute instead of fixed
    top: '20%', // You can also use numeric values like top: 50
    width: '85%',
    alignSelf: 'center',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    
    // Remove flex: 1 from here
    // It conflicts with absolute positioning
  
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  
    // Android Shadow
    elevation: 6,
  },
  settings_btn: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
    ...createCornerRadius(10, 20, 20, 10),
    flexDirection: 'row',           // Align icon and text horizontally
    justifyContent: 'center',      // Center horizontally
    alignItems: 'center',  

    paddingLeft:12,

    // Border
    borderWidth: 1,
    borderColor: '#ccc',

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    // Android Shadow
    elevation: 2,
  },






  search_btn: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    paddingHorizontal: 15,

    justifyContent: 'center',      // Center horizontally
    borderRadius: 10,
    marginTop: 20,
    marginRight: 3,
    marginLeft: 3,
    alignItems:'center',
    padding:10,

    // Border
    borderWidth: 1,
    borderColor: '#ccc',

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    // Android Shadow
    elevation: 2,
  },

  scan_btn_text: {
    color: '#fff',
    fontSize: 16,
  },

  search_container: {
    height: 150,

    flexDirection: 'row',
    justifyContent: 'center', // centers children horizontally
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 50,
    marginBottom: 10,
    backgroundColor: '#E0E0E0',
    borderTopLeftRadius: 20,
    borderTopRighttRadius: 20,
    zIndex: 0,

  },

  body: {
    flexGrowr: 1,
    zIndex: 0,
    backgroundColor: '#E0E0E0',
    paddingTop: 20,
    paddingBottom: 20,

    width: '100%',
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center'
  },
  home_btn: {
    backgroundColor: '#3D38D8',
    height: 60,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    // Android Shadow
    elevation: 6,
  },

  home_btn_text: {
    color: '#fff',
    fontSize: 16,
  },

  input: {
    backgroundColor: '#fff',
    height: 50,
    width: '55%',
    paddingHorizontal: 15,
    marginTop: 20,
    ...createCornerRadius(20, 10, 10, 20),
    // Border
    borderWidth: 1,
    borderColor: '#ccc',
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 10 },

    shadowRadius: 20,
    // Android Shadow
    elevation: 6,
    zIndex: 0,
  },
});


export default styles;
