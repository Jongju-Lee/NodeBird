import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";
const StyledButton = styled(Button)`
  margin-left: 35px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹쨱
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>종주</Avatar>} title="jeje7" />
      <StyledButton onClick={onLogOut}>로그아웃</StyledButton>
    </Card>
  );
};

export default UserProfile;
