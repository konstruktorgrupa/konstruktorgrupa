import { MyGallery } from "../comp/PhotoSwipe";

// rmoved img 26, 36, 90, 91, 121, 123, 164, 177, 30, 53, 66
export default function Galerija(props) {
  console.log(
    "🚀 ~ file: Galerija.jsx:11 ~ Galerija ~ props.marginTop * 10",
    props.marginTop * 10
  );
  return (
    <div
      id="slike"
      style={{
        // display: "absolute",
        marginTop: props.marginTop,
      }}
    >
      <MyGallery />
    </div>
  );
}
