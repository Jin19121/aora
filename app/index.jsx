import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
                contentContainerStyle={{ height: '100%' }}
            >

                <View className="w-full items-center justify-center min-h-[85vh] px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />

                    <View className="mt-5 gap-3">
                        <Text className="text-3xl text-white font-bold text-center">
                            무한한 가능성을
                        </Text>
                        <Text className="text-3xl text-white font-bold text-center">
                            탐구하는{' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-3 -right-8"
                            resizeMode='contain'
                        />

                    </View>
                    <View className="mt-10 gap-2">
                        <Text className="text-sm font-pregular text-gray-100 text-center">
                            당신의 창의력이 혁신과 만났을 때 :
                        </Text>
                        <Text className="text-sm font-pregular text-gray-100 text-center">
                            Aora와 함께 한계가 없는 탐험을 시작해 보세요.
                        </Text>
                    </View>
                    <CustomButton
                        title="이메일로 회원가입"
                        handlePress={() => router.push('/signIn')}
                        containerStyles="w-full mt-10"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})