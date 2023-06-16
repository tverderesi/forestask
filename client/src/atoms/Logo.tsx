export default function Logo({ className = "", light = true }) {
  return (
    <div
      className={`${className} text-lavender-web relative mx-auto flex w-auto items-end self-end  whitespace-nowrap py-2 text-3xl font-semibold`}
    >
      <div className="relative left-5">
        <Pinetree
          className={`${
            light ? "stroke-mantis-600" : "stroke-mantis-500"
          }  relative mr-1 inline align-middle`}
        />
        <span className={`${light ? "text-mantis-600" : "text-mantis-500"}`}>
          floresta
        </span>
        <span
          className={`${light ? "text-seal-brown-900" : "text-seal-brown-50"}`}
        >
          refa
        </span>
      </div>
    </div>
  );
}

export function Pinetree({ className = "", strokeWidth = "0.047" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2.25rem"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1"
      clipRule="evenodd"
      version="1.1"
      viewBox="0 0 32 40.269"
      xmlSpace="preserve"
      className={className}
    >
      <g
        fill="none"
        fillRule="nonzero"
        stroke="auto"
        strokeDasharray="none"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        strokeOpacity="1"
        strokeWidth={strokeWidth}
        clipRule="evenodd"
        transform="matrix(39.08795 0 0 39.14705 -6.71 33.875)"
      >
        <path d="M.652-.025V.14H.511v-.166"></path>
        <path d="M.814-.351l.111.155a.031.031 0 01.007.021.031.031 0 01-.01.024.033.033 0 01-.025.01.036.036 0 01-.022-.007L.671-.307l-.057.144a.034.034 0 01-.013.016.036.036 0 01-.053-.016L.491-.307l-.204.159a.036.036 0 01-.022.007.033.033 0 01-.025-.01.031.031 0 01-.01-.024c0-.008.002-.015.007-.021l.11-.155L.33-.353a.033.033 0 01-.015-.005.03.03 0 01-.011-.011A.039.039 0 01.3-.386C.3-.393.303-.4.308-.407l.087-.122a.036.036 0 01-.018-.012.037.037 0 01-.006-.021c0-.003 0-.007.002-.011l.005-.01.175-.244a.032.032 0 01.012-.011.032.032 0 01.016-.004.03.03 0 01.016.004.032.032 0 01.012.011l.175.244a.088.088 0 00.006.01.052.052 0 01.002.011.038.038 0 01-.007.021.03.03 0 01-.018.012l.087.122a.037.037 0 01.008.021c0 .007-.001.013-.004.017a.03.03 0 01-.011.011.09.09 0 01-.033.007z"></path>
        <path d="M.862-.158l.098.137A.035.035 0 01.967 0c0 .01-.003.018-.01.025a.033.033 0 01-.025.01.031.031 0 01-.021-.007l-.155-.12V0a.035.035 0 01-.01.025.033.033 0 01-.025.01.034.034 0 01-.026-.012L.581-.105.467.023a.027.027 0 01-.012.009.04.04 0 01-.015.003.033.033 0 01-.024-.01A.035.035 0 01.406 0v-.092l-.155.12A.031.031 0 01.23.035a.033.033 0 01-.025-.01A.033.033 0 01.195 0c0-.007.002-.014.007-.021L.3-.158"></path>
      </g>
    </svg>
  );
}
