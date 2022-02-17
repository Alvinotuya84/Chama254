import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as  PaperProvider} from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AuthProvider } from './Context/AuthContext';
import { AxiosProvider } from './Context/AxiosContext';


export default function App() {


//auth state




  //loading state
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (


      <AuthProvider>
        <AxiosProvider>
            <PaperProvider>
              <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
              </SafeAreaProvider>
            </PaperProvider>
        </AxiosProvider>
      </AuthProvider>


    );
  }
}
