'use client';

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">Your Name</h1>
                <p className="text-gray-600 mb-8">your.email@example.com | (123) 456-7890</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
                        About
                    </h2>
                    <p className="text-gray-700">
                        Brief professional summary goes here.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
                        Experience
                    </h2>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Job Title</h3>
                        <p className="text-gray-600">Company Name | Jan 2024 - Present</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Achievement or responsibility</li>
                            <li>Achievement or responsibility</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
                        Skills
                    </h2>
                    <p className="text-gray-700">JavaScript, TypeScript, React, Next.js, Tailwind CSS</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
                        Education
                    </h2>
                    <h3 className="text-lg font-semibold">Degree Name</h3>
                    <p className="text-gray-600">University Name | Graduation Year</p>
                </section>
            </div>
        </div>
    );
}