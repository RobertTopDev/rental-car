import { LoadingWrapper } from "./Loading.styled";
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <LoadingWrapper>
      <RotatingLines
        strokeColor="#b1b1b1"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoadingWrapper>
  );
}
