import { TailSpin } from "react-loader-spinner";

export function TreeSpinner(): JSX.Element {
  return (
    <div className="items-center justify-center flex">
      <img
        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/profilePicturePlaceholder.svg`}
        className="h-16"
        alt=""
      />
      <TailSpin
        height="64"
        width="64"
        color="#428c0efa"
        ariaLabel="tail-spin-loading"
        radius="0"
        wrapperStyle={{ zIndex: "2" }}
        wrapperClass="absolute fill-mantis color-mantis"
        visible={true}
      />
    </div>
  );
}
