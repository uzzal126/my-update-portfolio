import Image from "next/image";

const ProjectCard = ({ item }) => {
  return (
    <div className="leading-none">
      <div className="frame-screen relative bg-white rounded shadow-[0_0_15px_2px_rgba(51,51,51,0.10)]">
        <div className="dots flex items-center h-6 pl-3">
          <div className="dot h-2.5 w-2.5 mx-1 rounded-full bg-[#dadada]" />
          <div className="dot h-2.5 w-2.5 mx-1 rounded-full bg-[#dadada]" />
          <div className="dot h-2.5 w-2.5 mx-1 rounded-full bg-[#dadada]" />
        </div>
        <div className="relative block after:absolute after:content-[''] after:inset-0 overflow-hidden after:opacity-50 hover:after:bg-primary hover:after:opacity-80 after:transition-all group h-50">
          <Image
            src={item.thumbnail}
            alt={item.caption}
            fill
            className="w-full h-full object-cover object-top"
            priority
          />
          <div className="w-full text-center absolute top-1/2 z-10 transform -translate-y-1/2 space-x-3 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            {item.tf_link && (
              <a
                href={item.tf_link}
                target="_blank"
                rel="noreferrer"
                className="mb-0 text-primary capitalize text-base font-semibold bg-white px-4 py-2 rounded hover:bg-white-400 hover:text-primary"
              >
                ThemeForest
              </a>
            )}
            <a
              href={item.preview_link}
              target="_blank"
              rel="noreferrer"
              className="mb-0 text-primary capitalize text-base font-semibold bg-white px-4 py-2 rounded hover:bg-white-400 hover:text-primary"
            >
              Live Preview
            </a>
          </div>
        </div>
        <div className="px-4 py-3 min-h-20 hover:bg-white-500">
          <a href={item.preview_link} target="_blank" rel="noreferrer">
            <p className="text-lg font-semibold text-primary text-center">
              {item.caption}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
