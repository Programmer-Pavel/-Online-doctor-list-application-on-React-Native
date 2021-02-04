import React from "react";
import {Button, View} from "react-native-web";

import styled from "styled-components/native";

export const PatientScreen = ({navigation}) => {
    return <View>
        <ButtonBack onPress={() => navigation.goBack()}>+</ButtonBack>
        Patient
    </View>
}

const ButtonBack = styled.TouchableOpacity`
    width: 60px;
  height: 60px;
`;