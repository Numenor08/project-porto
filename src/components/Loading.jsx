import { RotatingLines } from "react-loader-spinner";

const LoadingRing = ({size}) => {
  return (
    <>
      <RotatingLines
        visible={true}
        height={size}
        width={size}
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default LoadingRing;
