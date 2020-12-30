import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'

//default navigationOptions override nav options in other screens
const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealScreen,
        },
        MealDetail: MealDetailScreen,
    },
    {
        //mode: 'modal', -- makes it slide from bottom
        // initialRouteName: 'Categories', -- can change if you want different route
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'A screen'
        }
    }
);

export default createAppContainer(MealsNavigator);

