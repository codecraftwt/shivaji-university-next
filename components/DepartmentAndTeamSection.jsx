'use client';
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
export default function DepartmentAndTeamSection() {
    const departments = [
        "Department of Agrochemicals and Pest Management",
        "Department of Bio-Chemistry",
        "Department of Bio-Technology",
        "Department of Botany",
        "Department of Chemistry",
        "Department of Industrial Chemistry",
        "Department of Commerce and Management",
        "Department of Commerce and Management M.B.A. Unit",
        "Department of Computer Science",
        "Department of Economics",
        "Department of Education",
        "Department of Electronics",
        "Department of Statistics",
        "UGC Center For Coaching For Competitive Examinations UGC Center",
    ];

    const team = [
        {
            name: "Shri C. P. Radhakrishnan",
            role: "Hon’ble Chancellor",
            img: "https://university.walstarfinance.com/wp-content/uploads/2024/10/202407311873496196-150x150-1.jpg",
        },
        {
            name: "Prof. (DR.) D. T. Shirke",
            role: "Hon’ble Pro-Vice Chancellor",
            img: "https://university.walstarfinance.com/wp-content/uploads/2024/10/shirke.jpg",
        },
        {
            name: "Prof.(Dr.) P.S.Patil",
            role: "Hon’ble Pro-Vice Chancellor",
            img: "https://university.walstarfinance.com/wp-content/uploads/2024/10/pvc.webp",
        },
        {
            name: "Dr.V.N.Shinde",
            role: "Registrar",
            img: "https://university.walstarfinance.com/wp-content/uploads/2024/10/registrar.jpg",
        },

    ];

    const scrollRef = useRef(null);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;

        const scrollInterval = setInterval(() => {
            if (isPaused || !container) return;

            container.scrollLeft += direction * 3;
            scrollAmount += 1;

            if (
                container.scrollLeft + container.clientWidth >= container.scrollWidth ||
                container.scrollLeft <= 0
            ) {
                setDirection((prev) => -prev);
            }
        }, 10);

        return () => clearInterval(scrollInterval);
    }, [direction, isPaused]);

    return (
        <section className="bg-[#f4f4f4] py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left - Departments */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Departments</h2>
                    <div className="bg-white rounded-2xl overflow-y-auto max-h-[290px] shadow-md border-l-4 border-orange-500 pr-2 custom-scroll">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                            {departments.map((dept, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-2 border-b border-gray-200 pb-2 text-sm"
                                >
                                    <span className="text-orange-500 font-bold text-lg">»</span>
                                    <p>{dept}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right - Leadership Team */}
                <div className="bg-[#f4f4f4] py-0 px-4">
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Leadership Team</h2>
                    <div className="max-w-4xl mx-auto">
                        <Swiper
                            style={{padding:'20px'}}
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={3000} // control speed of scroll
                            allowTouchMove={false} // disable swipe manually
                        >
                            {team.map((member, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition ">
                                        <div className="w-full h-40 flex items-center justify-center bg-white mb-3">
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="max-h-full max-w-full object-contain rounded-md"
                                            />
                                        </div>
                                        <h4 className="text-md font-semibold text-center">{member.name}</h4>
                                        <p className="text-sm text-gray-600 text-center">{member.role}</p>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
