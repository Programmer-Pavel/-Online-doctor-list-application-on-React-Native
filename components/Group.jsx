import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

export const Groups = ({user, diagnosis}) => {
    return <GroupItem>
            <Avatar
                source={{uri: user.avatar}}/>
            <View style={{flex: 1}}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
        </GroupItem>
}

Groups.defaultProps = {
    title: 'Untitled',
    items: []
}

const GrayText = styled.Text`
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;

const FullName = styled.Text`
  width: 105px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: #333333;
`;

const GroupTitle = styled.Text`

  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  text-align: center;
  text-transform: uppercase;

  color: #333333;
`;

const Avatar = styled.Image`
  width: 80px;
  height: 120px;
  margin-right: 20px;
`;

const GroupItem = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #DFDFDF;;
`;



