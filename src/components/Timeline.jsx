import { IoBookOutline } from "react-icons/io5";

export default function Timeline({ experiences }) {

    return (
        <div className="relative">
            {/* Vertical line from the center of the icon */}
            <div className="absolute left-[20px] md:left-[25px] top-0 bottom-0 w-px bg-ternary z-0"></div>

            {/* Heading with icon - positioned in flow with timeline */}
            <div className="flex items-center gap-3 mb-10 relative z-10">
                <div className="icon-box  rounded-xl w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center shadow-s2">
                    <IoBookOutline className="text-yellow-400 h-5 w-5" />
                </div>
                <h2 className="text-lg md:text-2xl font-semibold text-white-1 ">{experiences?.name}</h2>
            </div>

            {/* Map through experiences */}
            {experiences?.items?.map((experience, index) => (
                <div
                    key={experience.id}
                    className={`relative pl-12 ${index < experiences?.items?.length - 1 ? 'mb-6 md:mb-10' : ''}`}
                >
                    {/* Timeline dot aligned with the line */}
                    <div className="absolute left-[11px] md:left-[17px] top-0 h-[18px] w-[18px] rounded-full bg-ternary flex items-center justify-center z-10">
                        <div className="h-2 w-2 bg-yellow-2 rounded-full"></div>
                    </div>

                    {/* Position content */}
                    <div className="px-0 md:px-4 text-[13px] sm:text-[15px]">
                        <h3 className="font-medium text-white-1 mb-2">{experience?.position}</h3>
                        <div className="flex flex-col items-start justify-center gap-1">
                            <p className="text-gray-1">{experience?.company}</p>
                            <p>
                                <span className="text-yellow-1">{experience?.duration}</span>
                                <span className="text-yellow-1 ml-3">• {experience?.durationLabel}</span>
                            </p>
                            <p className="text-gray-1 italic">{experience?.location}</p>

                            <ul className="space-y-2">
                                {experience?.responsibilities?.map((responsibility, i) => (
                                    <li key={i} className="flex items-start md:items-center justify-start">
                                        <span className="text-yellow-2 mr-3 text-xl">•</span>
                                        <span className="text-gray-1">{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}