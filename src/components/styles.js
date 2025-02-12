import styled from "styled-components";
import blackUs from "../assets/blackUs.jpg";
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

export const GalleryTitle = styled.h2`
  position: relative;
  margin: 50px 0;
`;

export const Wrap = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
`;

export const Banner = styled.div`
  position: relative;

  > h1 {
    font-size: 46px;
    position: absolute;
    top: 60px;
    left: 40px;
    text-align: left;
    > span {
      font-size: 24px;
    }
  }
`;

export const Us = styled.img`
  content: url(${blackUs});
  height: 100vh;
  /* border-right: 2px solid black; */
`;

export const GalleryWrap = styled.div`
  position: relative;
  width: calc(100% - (100vh * 0.72));

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    overflow: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    padding-left: 40px;
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
    text-overflow: ellipsis;
    border-radius: 16px;
    color: black;
    font-weight: bold;
  }
`;
