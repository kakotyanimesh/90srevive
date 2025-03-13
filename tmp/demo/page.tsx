import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', backgroundColor: '#008080', color: '#FFFFE0' }}>
            <h1 style={{ textAlign: 'center', fontSize: '48px' }}>100xDevs, because 10x ain't enough!</h1>
            <p style={{ textAlign: 'center', fontSize: '24px' }}>A beginner-friendly platform for mastering programming skills.</p>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px', fontSize: '20px' }}>Explore Courses</a>
                <a href="https://projects.100xdevs.com/" style={{ textDecoration: 'none', color: '#FFFFE0', fontSize: '20px' }}>Explore Notes</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}> <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" width={200} height={150} alt="Card 1" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" width={200} height={150} alt="Card 2" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" width={200} height={150} alt="Card 3" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" width={200} height={150} alt="Card 4" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" width={200} height={150} alt="Card 5" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" width={200} height={150} alt="Card 1" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" width={200} height={150} alt="Card 2" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" width={200} height={150} alt="Card 3" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" width={200} height={150} alt="Card 4" /></a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ margin: '10px' }}><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" width={200} height={150} alt="Card 5" /></a>
            </div>

            <h3 style={{ textAlign: 'center', fontSize: '36px' }}>Every developer deserves to be a great engineer, a 100xEngineer!</h3>
            <p style={{ textAlign: 'center', fontSize: '24px' }}>Give yourself the power you deserve with a 100xdevs today!</p>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="https://play.google.com/store/apps/details?id=com.hundredx.devs" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px', fontSize: '20px' }}>Download App</a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ textDecoration: 'none', color: '#FFFFE0', fontSize: '20px' }}>Join Now</a>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.hundredx.devs"><Image src="https://app.100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMockup.01b5ae40.png&w=1920&q=75" width={500} height={300} alt="Mockup" /></a>
            <a href="https://app.100xdevs.com/"><Image src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" width={200} height={100} alt="Logo" /></a>
            <p style={{ textAlign: 'center', fontSize: '24px' }}>100xDevs<br/>because 10x ain't enough.</p>

            <h4 style={{ textAlign: 'center', fontSize: '24px', marginTop: '20px' }}>Follow us</h4>
            <h4 style={{ textAlign: 'center', fontSize: '24px', marginTop: '20px' }}>100x Links</h4>
            <div style={{ textAlign: 'center' }}>
                <a href="https://projects.100xdevs.com/" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px', fontSize: '20px' }}>Projects</a>
                <a href="https://report-100xdevs.vercel.app/" style={{ textDecoration: 'none', color: '#FFFFE0', fontSize: '20px' }}>Report</a>
            </div>
            <h4 style={{ textAlign: 'center', fontSize: '24px', marginTop: '20px' }}>100x Legal</h4>
            <div style={{ textAlign: 'center' }}>
                <a href="https://app.100xdevs.com/tnc" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px', fontSize: '20px' }}>Terms & Conditions</a>
                <a href="https://app.100xdevs.com/privacy-policy" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px', fontSize: '20px' }}>Privacy Policy</a>
                <a href="https://app.100xdevs.com/refund" style={{ textDecoration: 'none', color: '#FFFFE0', fontSize: '20px' }}>Refund & Cancellation</a>
            </div>
        </div>
    );
}