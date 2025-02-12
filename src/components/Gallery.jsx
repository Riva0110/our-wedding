import {
  Banner,
  GalleryWrap,
  GalleryTitle,
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
          <h1>
            Welcome to OUR WEDDING!
            <br />
            <span>love is love love is love love is love</span>
          </h1>
          <Us />
        </Banner>
        <GalleryWrap>
          {/* <GalleryTitle>Welcome to TzuHua & Riva’s wedding!</GalleryTitle> */}
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
