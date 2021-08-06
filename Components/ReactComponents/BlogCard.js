import React from 'react'
import { Text, View ,StyleSheet,ScrollView} from 'react-native'
import { Card, Button} from 'react-native-elements'

const blogPosts = [
    {
       title : "title 1"
    },
    {
        title : "title 2"
     },
     {
        title : "title 3"
     }
    
   ]

export default function BlogCard() {
    const logoImage = "https://blog.logo.com.tr/wp-content/uploads/2021/04/LOGO_YAZILIM_KV_1_0_onde.jpg";
    return (
        
        <Card style = {styles.cardStyle}>
  <Card.Image source={{uri: logoImage}} style = {styles.logo} opacity={0.7}>
  </Card.Image>
    <Text style={styles.blogTitle}>
      Logo Yazılım'ın Yeni Reklam Filmi Yayında!
    </Text>
    <Button
      buttonStyle={{borderRadius: 10, marginTop:10}}
      title='Şimdi Oku' />
</Card>



    )
}

const styles = StyleSheet.create({
    
    logo: {
        width: 300, 
        height: 150, 
        alignSelf: 'center',
        marginBottom:20,
        borderRadius:5
        
    },
    blogTitle: {
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20
        
    }

});
