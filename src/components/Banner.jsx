export default function Banner({ text, picture, className = "" }) {
  return (
    <div className={`bannerContainer ${className}`}>
      <img src={picture} className="bannerPicture" />
      {text && <h1 className="banner-overlay">{text}</h1>}
    </div>
  );
}
