import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', backgroundColor: '#008080', color: '#FFFFE0'}}>
            <h1 style={{textAlign: 'center', fontSize: '4em', textShadow: '2px 2px 4px #000000'}}>100xDevs, because 10x ain't enough!</h1>
            <p style={{textAlign: 'center', fontSize: '1.5em'}}>A beginner-friendly platform for mastering programming skills.</p>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <a href="https://harkirat.classx.co.in/new-courses" style={{textDecoration: 'none', color: '#FFFACD', marginRight: '20px', fontSize: '1.2em'}}>Explore Courses</a>
                <a href="https://projects.100xdevs.com/" style={{textDecoration: 'none', color: '#FFFACD', fontSize: '1.2em'}}>Explore Notes</a>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" width={300} height={200} alt="Card 1"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" width={300} height={200} alt="Card 2"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" width={300} height={200} alt="Card 3"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" width={300} height={200} alt="Card 4"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" width={300} height={200} alt="Card 5"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" width={300} height={200} alt="Card 1"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" width={300} height={200} alt="Card 2"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" width={300} height={200} alt="Card 3"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" width={300} height={200} alt="Card 4"/></a>
                </div>
                <div style={{width: '30%', margin: '10px'}}>
                    <a href="https://harkirat.classx.co.in/new-courses"><Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" width={300} height={200} alt="Card 5"/></a>
                </div>

            </div>
            <h3 style={{textAlign: 'center', fontSize: '2em', color: '#FFD700'}}>Every developer deserves to be a great engineer, a 100xEngineer!</h3>
            <p style={{textAlign: 'center', fontSize: '1.2em'}}>Give yourself the power you deserve with 100xdevs today!</p>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <a href="https://play.google.com/store/apps/details?id=com.hundredx.devs" style={{textDecoration: 'none', color: '#FFFACD', marginRight: '20px', fontSize: '1.2em'}}>Download App</a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{textDecoration: 'none', color: '#FFFACD', fontSize: '1.2em'}}>Join Now</a>
            </div>
            <div style={{textAlign: 'center'}}>
                <a href="https://play.google.com/store/apps/details?id=com.hundredx.devs"><Image src="https://app.100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMockup.01b5ae40.png&w=1920&q=75" width={500} height={300} alt="Mockup"/></a>
            </div>
            <div style={{textAlign: 'center'}}>
                <a href="https://app.100xdevs.com/"><Image src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" width={200} height={200} alt="Logo"/>
                    <div style={{fontSize: '1.5em', fontWeight: 'bold'}}>100xDevs<br/>because 10x ain't enough.</div>
                </a>
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <p style={{fontSize: '1.2em'}}>Follow us</p>
                <p style={{fontSize: '1.2em'}}>100x Links</p>
                <a href="https://projects.100xdevs.com/" style={{textDecoration: 'none', color: '#FFFACD', marginRight: '20px', fontSize: '1.2em'}}>Projects</a>
                <a href="https://report-100xdevs.vercel.app/" style={{textDecoration: 'none', color: '#FFFACD', fontSize: '1.2em'}}>Report</a>
                <p style={{fontSize: '1.2em'}}>100x Legal</p>
                <a href="https://app.100xdevs.com/tnc" style={{textDecoration: 'none', color: '#FFFACD', marginRight: '20px', fontSize: '1.2em'}}>Terms & Conditions</a>
                <a href="https://app.100xdevs.com/privacy-policy" style={{textDecoration: 'none', color: '#FFFACD', marginRight: '20px', fontSize: '1.2em'}}>Privacy Policy</a>
                <a href="https://app.100xdevs.com/refund" style={{textDecoration: 'none', color: '#FFFACD', fontSize: '1.2em'}}>Refund & Cancellation</a>
            </div>
        </div>
    );
}