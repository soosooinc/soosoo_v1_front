import styled from "styled-components";

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 33%;
`;

export const UserImg = styled.img`
  height: 150px;
  width: 150px;
`;

export const UserName = styled.text`
  font-family: "Pretendard";
  font-size: 2.5rem;
  padding-top: 5px;
`;

export const UserKindergartenName = styled.text`
  font-family: "Pretendard";
  font-size: 1.5rem;
  padding-top: 5px;
`;

export const BottomWrapper = styled.div`
  height: 67%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  display: flex;
  padding-top: 30px;
  background-color: aqua;
`;

export const NoticeWrapper = styled.div`
  height: 90%;
  width: 90%;
  background-color: white;
`;

export const NoticeHeader = styled.div`
  height: 15%;
  width: 100%;
  background-color: beige;
`;

export const NoticeBody = styled.div`
  height: 85%;
  width: 100%;
  background-color: blueviolet;
`;

export const NoticeHeaderTag = styled.button`
  cursor: pointer;
  height: 100%;
  width: 20%;
  border: none;
  background-color: yellow;
  &:focus {
    outline: 1px solid black;
  }
`;
