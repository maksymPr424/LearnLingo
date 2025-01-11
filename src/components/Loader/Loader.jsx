import { Triangle } from "react-loader-spinner";

export default function Loader({ width = "100%", height = "100%" }) {
  return (
    <Triangle
      height={height}
      width={width}
      radius="9"
      color="var(--base)"
      ariaLabel="loading"
    />
  );
}
