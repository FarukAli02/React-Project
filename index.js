import { AppRegistry } from 'react-native';
import App from './App'; // Don't add .js or .tsx
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
