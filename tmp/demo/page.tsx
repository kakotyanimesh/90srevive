import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', backgroundColor: '#008080', color: '#FFFFE0' }}>
            <h1 style={{ textAlign: 'center', fontSize: '4em', textShadow: '2px 2px 4px #000000' }}>100xDevs, because 10x ain't enough!</h1>
            <p style={{ textAlign: 'center', fontSize: '1.5em' }}>A beginner-friendly platform for mastering programming skills.</p>
            <div style={{ textAlign: 'center', marginBottom: '2em' }}>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ textDecoration: 'none', color: '#FFD700', marginRight: '1em', fontSize: '1.2em' }}>Explore Courses</a>
                <a href="https://projects.100xdevs.com/" style={{ textDecoration: 'none', color: '#FFD700', fontSize: '1.2em' }}>Explore Notes</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" alt="Card 1" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" alt="Card 2" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="Card 3" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" alt="Card 4" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" alt="Card 5" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" alt="Card 1" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" alt="Card 2" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="Card 3" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" alt="Card 4" width={200} height={150} style={{ margin: '1em' }} /></a>
                <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" alt="Card 5" width={200} height={150} style={{ margin: '1em' }} /></a>
            </div>
            <h3 style={{ textAlign: 'center', fontSize: '2em', color: '#FFA500' }}>Every developer deserves to be a great engineer, a 100xEngineer!</h3>
            <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#FFFFE0' }}>Give yourself the power you deserve with 100xdevs today!</p>
            <div style={{ textAlign: 'center', marginBottom: '2em' }}>
                <a href="https://play.google.com/store/apps/details?id=com.hundredx.devs" style={{ textDecoration: 'none', color: '#FFD700', marginRight: '1em', fontSize: '1.2em' }}>Download App</a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ textDecoration: 'none', color: '#FFD700', fontSize: '1.2em' }}>Join Now</a>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.hundredx.devs"><Image src="https://app.100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMockup.01b5ae40.png&w=1920&q=75" alt="Mockup" width={500} height={300} style={{ display: 'block', margin: '0 auto', marginBottom: '2em' }} /></a>
            <a href="https://app.100xdevs.com/"><Image src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="Logo" width={200} height={100} style={{ display: 'block', margin: '0 auto', marginBottom: '2em' }} /></a>
            <p style={{ textAlign: 'center', fontSize: '1.5em', color: '#FFFFE0' }}>100xDevs<br/>because 10x ain't enough.</p>
            <div style={{ textAlign: 'center', marginBottom: '2em' }}>
                <p style={{fontSize: '1.2em', color: '#FFFFE0'}}>Follow us</p>
                <p style={{fontSize: '1.2em', color: '#FFFFE0'}}>100x Links</p>
                <a href="https://projects.100xdevs.com/" style={{ textDecoration: 'none', color: '#FFD700', marginRight: '1em', fontSize: '1.2em' }}>Projects</a>
                <a href="https://report-100xdevs.vercel.app/" style={{ textDecoration: 'none', color: '#FFD700', fontSize: '1.2em' }}>Report</a>
                <p style={{fontSize: '1.2em', color: '#FFFFE0'}}>100x Legal</p>
                <a href="https://app.100xdevs.com/tnc" style={{ textDecoration: 'none', color: '#FFD700', marginRight: '1em', fontSize: '1.2em' }}>Terms & Conditions</a>
                <a href="https://app.100xdevs.com/privacy-policy" style={{ textDecoration: 'none', color: '#FFD700', marginRight: '1em', fontSize: '1.2em' }}>Privacy Policy</a>
                <a href="https://app.100xdevs.com/refund" style={{ textDecoration: 'none', color: '#FFD700', fontSize: '1.2em' }}>Refund & Cancellation</a>
            </div>
        </div>
    );
}