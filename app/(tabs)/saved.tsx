import {View, Text, Image} from "react-native";
import React from 'react';
import {icons} from "@/constants/icons";

const Saved = () => {
    return(
        <View className="bg-primary flex-1 px-10">
            <View className="flex justify-center items-center flex-1 flex-col gap-5">
                <Image source={icons.save} className="size-10" tintColor="#fff" />
                <Text className="text-white font-bold text-xl">Saved Page</Text>
                <Text className="text-gray-500 font-semibold text-base">Coming soon!</Text>
            </View>
        </View>
    )
};

export default Saved;