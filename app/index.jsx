import { Text, View } from 'react-native'
import {Link} from "expo-router"




export default telaInicio = () => {
    return (
        <View>
            <Link href='/lista-de-tarefas'>
                <Text>Lista de Tarefas</Text>
            </Link>
            
            <Link href= '/pokemon'>
                <Text>Pokemon</Text>
            </Link>
                
            <Link href= '/splash-screen'>
                <Text>Splash Screen</Text>
            </Link>
               
            <Link href= '/Santander'>
                <Text>Santander</Text>
            </Link>

            <Link href= '/jogo-cartas'>
            <Text>Jogo de cartas</Text>
            </Link>

            <Link href= '/Navegacao'>
            <Text>Navegação entre telas</Text>
            </Link>
        </View>
    )
}