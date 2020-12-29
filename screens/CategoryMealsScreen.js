import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Colors';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    console.log(catId);
    return(
        <View style={styles.screen}>
            <Text>The Category Meal Screen Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button 
                title="Go to Details" 
                onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }} />
        <Button title="Go Back" onPress={() => {
            props.navigation.pop();
        }} />
        </View>
    )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Color.primaryColor,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;