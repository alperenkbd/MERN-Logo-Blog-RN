import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'

import BlogCard from '../Components/ReactComponents/BlogCard'



export default function MainPage() {
    return (
        <View>
            <ScrollView>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            </ScrollView>
        </View>
        
        
    )
}

