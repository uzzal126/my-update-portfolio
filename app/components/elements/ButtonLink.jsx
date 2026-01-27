import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ButtonLink = ({ url, label, ariaLabel }) => {
  return (
    <Link
      href={url}
      aria-label={ariaLabel || "Get started"}
      className="text-sm xs:text-base px-5 xs:px-7 py-3 sm:py-3.5 inline-block rounded text-white font-semibold bg-primary uppercase"
    >
      {label}
      <span className="ml-2 align-middle leading-none">
        <BsArrowRight className="inline-block" />
      </span>
    </Link>
  );
};

export default ButtonLink;
