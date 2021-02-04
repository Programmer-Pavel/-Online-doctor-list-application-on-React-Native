import React from 'react';
import {Button, SectionList} from "react-native-web";
import {Groups} from "../components/Group";
import SectionTitle from "../components/SectionTitle";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native";

const DATA = [
    {
        title: "Наши врачи",
        data: [
            {
                diagnosis: 'Оптометрист',
                user: {
                    fullname: 'Архипова Ольга Витальевна',
                    avatar: 'https://s3-alpha-sig.figma.com/img/9189/d3df/759717ddac038ca7aa65f9b33786d55e?Expires=1613347200&Signature=Jdk5qD8HYYDzqnvBwZLkvCF-UKGYfECaPZR-vACPNpdnFoLXewtlLJICS2v9o3XKTAEzMP3zurrohO75Ed3i4yxqM8nGVO3W57lMADTCLLsrhSssurjqdijn13XzOTfZrp9pGPZGvZMiGguwOi5cD~v~otNbZHEL8Pm-GBtddtStxK1Xk2ALLO7~ucFztYjHUaMUbmb0OuWN9UF~P2iOvwUh0LV87CI6OCf8SpgD2KgrB~~1CDrNjEh9oPbMHdsS2GjQx0oXH1WAeolu~keOZQddsGwkEgzDfl~kg7VP9iBzLa0~ucMQAntKAx1l2o3OuRJdR4Fhi2kIw3qsweQ8vw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
            },
            {
                diagnosis: 'Оптометрист',
                user: {
                    fullname: 'Рулина Олеся Михайловна',
                    avatar: 'https://s3-alpha-sig.figma.com/img/37b2/cfd3/2b49a9c8cf10b50372a03363cf6d3335?Expires=1613347200&Signature=TVAe0k13kQKkjTu0PGXMAyFHkMSQhjZ8uHqfFsgVlJQw1MdXkoK6p2M8HJcyVjxn0d~JcACUAdJ8Ud8AcXWcR5RpiqDVJem8e0HvbEtSqNYZrgIOwu2pCuSYPuTFK-jREEFDSqtM65npi-qtLWKW5F3NS99kPiIhIiR1awU6lB9JPZMbUQlHAEfeOj9AQbeoZsYPo9aTtc0zfVKjoxNwQJu7osp1HleOeBuDcULRyo1JPS9mLYqBRgUg-Lt5jMSOybPb-y2MPFFYsZhWDUGs4EEcaNwHTsYeDELfpMid5EUk5kUCkjvV9y4QMfrH7ZhWz0XyQx3PY9Ct--vmPXA2cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
            },
            {
                diagnosis: 'Врач-офтальмолог',
                user: {
                    fullname: 'Калинина Карина Борисовна',
                    avatar: 'https://s3-alpha-sig.figma.com/img/3ce3/0c09/eed9ddc15fbcbb1671b3b272c81f4891?Expires=1613347200&Signature=X0gyVzTMah3tJSS1o1WdVWnZF1FnqrejjlVaoAkFXLq0jTCS8Y4zHjfLa75mI-ABMNBIn5fsuvZBK9PzkxtAjziUuoRnLQUVyRHAnr2pmr5AiX~pbKFftIZGAF3vtHbK~6dEL9gf3rA9S58tDlEROohWGkkyJQVVSHyw7YTvDVwjRNADP4-5ySYrHRD6Oq3zfxpOLm5AW5dEnQ3RmFtFVYXDTPOhLZh50I8vf6VOEbx3pcGwqmd1aTplKtlkTII6ycLbFdf-HAfKLmsNSKqsKG642TRanNPuReTPxtA5tnZy3DQW~AoZsqKffCxbocIZIo7Fnn8AwOr3GM-piePKWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
            },
            {
                diagnosis: 'Оптометрист',
                user: {
                    fullname: 'Хомякова Валентина Сергеевна',
                    avatar: 'https://s3-alpha-sig.figma.com/img/b99f/c81f/1a4d72f6aa5c74e8ffa98dcdc5d9bba8?Expires=1613347200&Signature=LH7fmZCi6b-1iLu0JFZui0S0av1WzL2P4MO4eI0tW0VCUcX-ZkKRV~ZJXh4x6NabVK1iQEyRYAZ4QeEkUxBzsJybj5PzipYZx7MKH51AuxtgF8iGNEKikCuAAYM3u7j1CI4gbDaH0s79e-JRhVfhFJwfEFhQRtW-6m53Y-69eIbK80eOCtp7TPRemjonR8X7z57wI~7c94V0jT28s8Zd~qdcqp-O8AfhKEA4SjUEXK-Wq9tmnzrfZT0vlHgy~niDALRKU1sVlpaiOqamVXXqcjMw~R~CeReUYmYMS34Sd4J2~Gj2DrzrQPxAr2xMl~iXonWcyPZ9lJjdWY7XQJrizw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
            },
            {
                diagnosis: 'Оптометрист',
                user: {
                    fullname: 'Курпякова Ирина Андреевна',
                    avatar: 'https://s3-alpha-sig.figma.com/img/f6af/c116/774e653894fe27a5cd6a8f440916aaa8?Expires=1613347200&Signature=c--P1wceW8eLjtU7RY7hJLbKZmGjXOA1JY7RkZ7cLqmX62jXdJ5BQ1g~scwakpADw5Y7ywylsMVn8kZsPXEUitBA7mLy9ndwTojX6YpOXrJox-TpbD51fNIKGV5PvoWVqJU~tcSbCmr6gb~JJLAX1qVh6IQ2aG17zI5x-V2bpMgPAUv-rLUiu-TERGViffyzz6mVMjNctlKifHxRq3lkGFNIj6EiMJtKBA4aceTP2g45N1IjI8ekQX3p3d3J4sLCDT5hK8JGFHEJL-cEyMkSKBrHzbGxFmRuu4FPMuxlxdBz6bKbEKWHfXSVlPpB7nTEY2O2MpuNctJK2cDyDa9DVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
            }
        ]
    }
];

export function HomeScreen({navigation}) {
    return <Container>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Groups {...item}/>}
            renderSectionHeader={({section: {title}}) => (
                <SectionTitle>{title}</SectionTitle>
            )}
        />
        <PlusButton onPress={() => navigation.navigate('Patient')}>
            {/*<ButtonName>ДОБАВИТЬ ВРАЧА</ButtonName>*/}
            <Ionicons name="ios-add" size={14} color="#FFFFFF" />
        </PlusButton>
    </Container>
}

const Container = styled.View`
  flex: 1;
`;

const ButtonName = styled.Text`
  width: 300px;
  height: 55px;
  
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  color: #FFFFFF;
`;

const PlusButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 300px;
  height: 55px;
  right: 15px;
  bottom: 15px;
  background: #F36E20;
  border-radius: 4px;
`;

