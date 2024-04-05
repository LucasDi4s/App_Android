
import { useFonts,NewRocker_400Regular} from '@expo-google-fonts/new-rocker';
import { View } from 'react-native';

import Produto from './src/telas/Produtos';
import mock from './src/mocks/produto';



export default function App() {

  //Carrega a fonte para Projeto
  const[fonteCarregada] = useFonts({
    "NewRocker_400Regular":NewRocker_400Regular,
  })

  //checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }
return <Produto {...mock}/>
}
