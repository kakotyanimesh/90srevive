import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the generated page
// @ts-ignore
const Home = dynamic(() => import('../../../tmp/demo/page').catch(() => () => <div>Page not found</div>), { ssr: false });

export default function HomePage() {
    return (
        <div>
            <Home />
        </div>
    );
}
