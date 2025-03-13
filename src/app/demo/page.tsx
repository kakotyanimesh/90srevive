import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div className="bg-gradient-to-r from-lime-500 to-teal-500 text-yellow-50 font-impact">
            <div className="container mx-auto p-4">
                <div className="flex justify-center">
                    <Image src="/images/logo.png" alt="Hackathon Raptors Logo" width={300} height={150} />
                </div>
                <h1 className="text-7xl font-bold text-center mb-8">HACKATHON RAPTORS</h1>
                <div className="text-center">
                    <Image src="https://cdn.prod.website-files.com/65de32a4db6b43b048630aef/65df5b36cfa3a27948694b79_AdobeStock_321156867.jpeg" alt="Experts" width={500} height={300} />
                </div>
                <h2 className="text-4xl font-bold text-center mt-8">We’re a community of experts specializing on:</h2>
                <ul className="text-2xl list-disc list-inside mt-4">
                    <li>Impactful Challenges</li>
                    <li>Proven Fundraising</li>
                    <li>Efficient Scientific Methods</li>
                    <li>Top-Tier Software Development</li>
                    <li>Altruism-centered Events</li>
                    <li>Respected Collaboration</li>
                </ul>

                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-center mb-4">VALUES</h2>
                    <h3 className="text-3xl font-bold text-center mb-8">Ideate. Program. Revolutionize.</h3>
                    <a href="https://www.raptors.dev/leadership-principles" className="text-center block text-xl font-bold underline mb-4">Learn More</a>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-2">Impactful Challenges</h4>
                            <ul className="list-disc list-inside">
                                <li>Community involvement</li>
                                <li>Global impact</li>
                                <li>Problem-solving focus</li>
                                <li>Collective intelligence</li>
                                <li>Tech-driven solutions</li>
                                <li>Creative synergy</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Proven Fundraising</h4>
                            <ul className="list-disc list-inside">
                                <li>Non-profit success</li>
                                <li>Funding experiments</li>
                                <li>Donor engagement</li>
                                <li>Ethical transparency</li>
                                <li>Resource optimization</li>
                                <li>Sustaining growth</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Efficient Scientific Methods</h4>
                            <ul className="list-disc list-inside">
                                <li>Data-driven analysis</li>
                                <li>Objective solutions</li>
                                <li>Evidence-based research</li>
                                <li>Peer-reviewed techniques</li>
                                <li>Methodical approach</li>
                                <li>Scalable results</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Top-Tier Software Development</h4>
                            <ul className="list-disc list-inside">
                                <li>Modern development stacks</li>
                                <li>Dynamic solutions</li>
                                <li>Quality-driven code</li>
                                <li>Robust architectures</li>
                                <li>Elite programmers</li>
                                <li>User-focused design</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Altruism-Centered Events</h4>
                            <ul className="list-disc list-inside">
                                <li>Giving back</li>
                                <li>Positive change</li>
                                <li>Empathy in action</li>
                                <li>Shared humanity</li>
                                <li>Pro bono work</li>
                                <li>Empowerment</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Respected Collaboration</h4>
                            <ul className="list-disc list-inside">
                                <li>Expert alliances</li>
                                <li>Collaborative growth</li>
                                <li>Network strength</li>
                                <li>Mutual respect</li>
                                <li>Cross-sector partnerships</li>
                                <li>Visionary outcomes</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Events Section -  Simplified for brevity */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-center mb-8">EVENTS</h2>
                    {/* Repeat event cards as needed */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <a href="https://www.raptors.dev/project/localdawn----local-first-connect-always">
                            <div className="bg-purple-700 p-4 rounded-lg">
                                <h3 className="text-xl font-bold mb-2">LocalDawn</h3>
                                <p className="text-sm">Local First, Connect Always, Empower Communities</p>
                            </div>
                        </a>
                        {/* Add more event cards here */}
                    </div>
                </div>

                {/* ... rest of the content similarly simplified ... */}
            </div>
        </div>
    );
}