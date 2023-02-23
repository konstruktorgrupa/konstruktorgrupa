import { MyGallery } from "../comp/PhotoSwipe";

// rmoved img 26, 36, 90, 91, 121, 123, 164, 177, 30, 53, 66
export default function Galerija(props) {
  return (
    <div
      id="slike"
      style={{
        display: "absolute",
        top: props.marginTop,
      }}
    >
      <MyGallery />
    </div>
  );
}
