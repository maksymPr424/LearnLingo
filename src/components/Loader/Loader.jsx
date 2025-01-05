import { Audio } from "react-loader-spinner";

export default function Loader({ width = "80px", height = "80px" }) {
  return (
    <Audio
      height={height}
      width={width}
      radius="9"
      color="var(--text)"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
