import { InputFieldProps } from "@/types/type";
import { Text, View, KeyboardAvoidingView, Image, Platform, Keyboard, TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

const InputField = ({
    label, 
    labelStyle,
    icon,
    secureTextEntry = false,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props

}: InputFieldProps) => {
return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="my-1">
                <Text className={`text-lg font-JakartaSemiBold mb-1 ${labelStyle}`}>{label}</Text>
                <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                    {icon && (
                        <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
                    )}
                <TextInput
                    className={`rounded-full p-2 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                    secureTextEntry={secureTextEntry}
                    {...props} 
                />

                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)
}
export default InputField;