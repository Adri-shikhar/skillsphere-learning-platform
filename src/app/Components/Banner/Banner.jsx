/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import bannerHero from '@/assets/banner.webp';

const Banner = () => {
    return (
        <section className="bg-purple-50 py-12 md:py-16 mt-10 mb-10">
            <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:items-center">
                <div className="w-full flex-1 space-y-4 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Learn new skills with SkillSphere
                    </h1>
                    <p className="text-gray-600">
                        Browse courses and learn at your own pace.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                        <Link
                            href="/Courses"
                            className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-700"
                        >
                            Browse courses
                        </Link>
                        <Link
                            href="/Registration"
                            className="rounded-lg border border-purple-300 bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 hover:bg-purple-50"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>

                <div className="w-full max-w-md flex-1">
                    <img
                        src={bannerHero.src}
                        alt="SkillSphere online learning"
                        width={bannerHero.width}
                        height={bannerHero.height}
                        className="w-full rounded-xl border border-purple-200 shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
