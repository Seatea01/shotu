import { ScrollView, View, Image, Text} from "react-native";
import { icons, images } from "@/constants";
import React, { useState } from "react";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth"

const SignIn = () =>{
    const onSignInPress = () =>{

    }
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image 
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Welcome 👋</Text>
                </View>

                <View className="p-5"> 
                  
                    <InputField 
                        label = "Email"
                        placeholder="Enter your email"
                        icon={icons.email}
                         value={form.email}
                         onChangeText={(value)=> setForm({...form, email: value})}
                    />
                    <InputField 
                        label = "Password"
                        placeholder="Enter your password"
                        icon={icons.lock}
                         value={form.password}
                         onChangeText={(value)=> setForm({...form, password: value})}
                         secureTextEntry = {true}
                    />

                    <CustomButton
                        title="Sign In"
                        onPress={onSignInPress}
                        className="mt-6"
                    />
                <OAuth />

                <Link href="/sign-up">
                    <Text className="text-lg text-center text-general-200 mt-10">Do not have an account? </Text>
                    <Text className="text-primary-500 text-lg">Sign Up</Text>
                </Link>
               </View>

               {/* Verification modal */}
            </View>
            
        </ScrollView>
    )
}

export default SignIn;