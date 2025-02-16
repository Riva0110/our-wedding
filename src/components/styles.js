import styled from "styled-components";

import blackUs from "../assets/blackUs.jpg";
import usTitle from "../assets/banner-us.png";
import weddingTitle from "../assets/banner-wedding.png";
import loveDesc from "../assets/banner-love-desc.png";
import loveBottom from "../assets/banner-love.png";
import texture from "../assets/texture.png";

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${texture});
  opacity: 0.6;
`;

export const Wrap = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
`;

export const Banner = styled.div`
  position: relative;

  > h1 {
    font-size: 42px;
    position: absolute;
    top: 40px;
    left: 40px;
    text-align: left;
    > span {
      font-size: 20px;
    }
  }
`;

export const Us = styled.img`
  content: url(${blackUs});
  height: 100vh;
  border-right: 4px solid white;
`;

export const UsTitle = styled.img`
  content: url(${usTitle});
  position: absolute;
  top: 20px;
  left: 20px;
  width: 45%;
`;

export const WeddingTitle = styled.img`
  content: url(${weddingTitle});
  position: absolute;
  top: 36px;
  right: 20px;
  width: 50%;
`;

export const ThreeDesc = styled.div`
  color: black;
  position: absolute;
  top: 28%;
  right: 40px;
  text-align: end;
  font-size: 20px;
  strong {
    span {
      color: white;
    }
  }
`;

export const LoveDesc = styled.img`
  content: url(${loveDesc});
  position: absolute;
  top: 52%;
  left: 20px;
  width: 25%;
`;

export const LoveBottom = styled.img`
  content: url(${loveBottom});
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
`;

export const GalleryWrap = styled.div`
  position: relative;
  width: calc(100% - (100vh * 0.72));

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    overflow: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    padding-left: 40px;
    padding-right: 40px;gsa
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  position: relative;
  /* border: 2px solid black; */
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

  > img {
    height: 240px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  > div:first-of-type {
    height: 160px;
    padding: 14px;
    background-color: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: left;

    > p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  > div:last-of-type {
    position: absolute;
    bottom: 10px;
    right: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 28px);
    text-align: end;
    border-radius: 16px;
    color: black;
    font-weight: bold;
  }
`;
