import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Recherche from '../components/Recherche';
import CoursDetails from '../components/CoursDetails';


const AppNavigator = createStackNavigator({
  Home: {
    screen: Recherche,
    navigationOptions: {
        title: 'Accueil'
    }
  },
  CoursDetails: {
      screen: CoursDetails
  }
});

export default createAppContainer(AppNavigator);