import {
  Banner,
  GalleryWrap,
  WeddingTitle,
  ThreeDesc,
  LoveBottom,
  LoveDesc,
  UsTitle,
  Row,
  Post,
  Background,
  Us,
  Wrap,
} from "./styles";
import love from "../assets/love.jpg";
import us from "../assets/us.jpg";
import mouse from "../assets/mouse.jpg";

const data1 = [
  {
    from: "Riva",
    imgUrl: love,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "Riva",
    imgUrl: us,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福永遠幸福永遠幸福",
  },
  {
    from: "Riva",
    imgUrl: mouse,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "子華",
    imgUrl: love,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "子華",
    imgUrl: us,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: love,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: us,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: love,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: us,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
];

const data2 = [
  {
    from: "TzuHua",
    imgUrl: mouse,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: love,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: us,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: us,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: love,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: mouse,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: love,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: us,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
  {
    from: "TzuHua",
    imgUrl: mouse,
    message:
      "祝福子華和廉淨永遠幸福快樂～～～永遠幸福快樂～～～永遠幸福永遠幸福",
  },
];

const Gallery = () => {
  return (
    <>
      <Background />
      <Wrap>
        <Banner>
          <Us />
          <UsTitle />
          <WeddingTitle />
          <LoveDesc />
          <LoveBottom />
          <ThreeDesc>
            <span>
              <strong>實歲 33 歲</strong>
              <br />
              Lian Jing Huang
            </span>
            <br />
            <br />
            <span>
              <strong>虛歲 33 歲</strong>
              <br />
              Tzu Hua Liao
            </span>
            <br />
            <br />
            <br />
            <strong>
              <span>姍姍來遲的彼此</span>
              <br />
              一起在 3 月 3 日<br />
              下午 3 點結婚了
            </strong>
          </ThreeDesc>
        </Banner>
        <GalleryWrap>
          <div>
            <Row>
              {data1.map(({ imgUrl, message, from }, index) => (
                <Post key={`${imgUrl}_${index}`}>
                  <img src={imgUrl} alt="picture" />
                  <div>
                    <p>{message}</p>
                  </div>
                  <div>By {from}</div>
                </Post>
              ))}
            </Row>
            <Row>
              {data2.map(({ imgUrl, message, from }, index) => (
                <Post key={`${imgUrl}_${index}`}>
                  <img src={imgUrl} alt="picture" />
                  <div>
                    <p>{message}</p>
                  </div>
                  <div>By {from}</div>
                </Post>
              ))}
            </Row>
          </div>
        </GalleryWrap>
      </Wrap>
    </>
  );
};

export default Gallery;
