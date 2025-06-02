import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className="min-h-[75vh] bg-white w-full relative">
            <section className="relative">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showArrows
                    dynamicHeight={false}
                    showIndicators={false}
                >
                    {/* Slide 1 */}
                    <div className="relative z-30">
                        <Image
                            src="https://www.unishivaji.ac.in/uploads/home_photos/Shivaji-University-Kolhapur.jpg"
                            alt="Campus View"
                            width={1280}
                            height={450}
                            className="w-full h-[450px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-10 text-white">
                            <p className="text-lg font-semibold">Shaping bright minds through quality education and innovation.</p>
                            <h1 className="text-4xl lg:text-6xl font-bold mt-2">Shivaji University: Empowering Future Generations</h1>
                            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full">
                                Admission Open
                            </button>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="relative">
                        <Image
                            src="https://www.unishivaji.ac.in/uploads/home_photos/savarkar1.jpg"
                            alt="Convocation Ceremony"
                            width={1280}
                            height={450}
                            className="w-full h-[450px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-10 text-white">
                            <p className="text-lg font-semibold">Be a part of our history</p>
                            <h1 className="text-4xl lg:text-6xl font-bold mt-2">Landmark to Create the Future.</h1>
                            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full">
                                Admission Open
                            </button>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="relative">
                        <Image
                            src="https://www.unishivaji.ac.in/uploads/home_photos/005_2_FINAL-.jpg"
                            alt="Library"
                            width={1280}
                            height={450}
                            className="w-full h-[450px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-10 text-white">
                            <h1 className="text-4xl lg:text-6xl font-bold mt-2">Explore Our Library</h1>
                            <p className="text-lg mt-2 max-w-xl">Modern resources and timeless wisdom combined.</p>
                            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full">
                                Learn More
                            </button>
                        </div>
                    </div>
                </Carousel>

                {/* Icon Section */}
                <div className="absolute  bottom-[-72px] left-1/2 transform -translate-x-1/2 w-full max-w-8xl px-4">
                    <div className="flex overflow-x-auto space-x-4 scrollbar-hide justify-center p-3 z-40 pb-[40px]">
                        {[
                            { label: 'BBK KRC', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/books-stack-of-three.png' },
                            { label: 'Affiliation', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/group.png' },
                            { label: 'Distance Education Online Programs', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/man.png' },
                            { label: 'Our Programs', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/paper.png' },
                            { label: 'E-Suvidha', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/wireframe.png' },
                            { label: 'Exam Section', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/exam.png' },
                            { label: 'Online Receipt Portal', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/credit-card.png' },
                            { label: 'Students Portal', icon: 'https://university.walstarfinance.com/wp-content/uploads/2024/10/group.png' },
                        ].map((item, idx) => (
                             <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut", delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0 w-[168px] bg-[#2097f4] rounded-2xl shadow-xl flex flex-col items-center p-4 transition hover:shadow-2xl"
                            >
                                <div className="w-12 h-12 mb-2">
                                    <img src={item.icon} alt={item.label} className="w-full h-full object-contain filter brightness-0 invert" />
                                </div>
                                <p className="text-center text-sm font-semibold text-white  cursor-pointer hover:text-orange-500">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </section>
        </div>
    );
};

export default HeroSection;
