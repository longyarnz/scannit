import { AppRegistry, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);
AppRegistry.registerComponent(appName, () => App);
