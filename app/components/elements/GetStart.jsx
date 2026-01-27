import ButtonLink from "@/app/components/elements/ButtonLink";
import Image from "next/image";

const GetStart = () => {
  return (
    <div className="py-15 bg-[#f5f7fd]">
      <div className="container">
        <div className="text-center">
          <div className="mb-6 w-40 mx-auto">
            <Image
              src="/images/others/heart.svg"
              alt="heart"
              width={160}
              height={160}
            />
          </div>
          <h3 className="text-xl sm:text-3xl text-primary font-medium mb-8 lg:mb-10 md:px-10 lg:px-32">
            I specialize in transforming your creative vision into tangible
            solutions, elevating and enriching your digital journey.
          </h3>
          <ButtonLink
            url="mailto:uzzalhossain.dev@gmail.com"
            label="get started"
            ariaLabel="Get started"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStart;
