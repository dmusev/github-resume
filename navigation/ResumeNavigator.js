import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LandingScreen from '../screens/LandingScreen'
import ResumeScreen from '../screens/ResumeScreen'

const ResumeNavigator = createStackNavigator({
  Landing: LandingScreen,
  Resume: ResumeScreen
})

export default createAppContainer(ResumeNavigator)
