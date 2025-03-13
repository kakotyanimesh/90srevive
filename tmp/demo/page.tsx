import Image from 'next/image';
import React from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', backgroundColor: '#008080', color: '#FFFFE0' }}>
            <h1 style={{ textAlign: 'center', fontSize: '4em', textShadow: '2px 2px 4px #000000' }}>100xDevs, because 10x ain't enough!</h1>
            <p style={{ textAlign: 'center', fontSize: '1.5em' }}>A beginner-friendly platform for mastering programming skills.</p>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px', padding: '10px 20px', backgroundColor: '#8B0000', borderRadius: '5px' }}>Explore Courses</a>
                <a href="https://projects.100xdevs.com/" style={{ textDecoration: 'none', color: '#FFFFE0', padding: '10px 20px', backgroundColor: '#8B0000', borderRadius: '5px' }}>Explore Notes</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" width={200} height={150} alt="Card 1" style={{ margin: '10px' }}/>
                <Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" width={200} height={150} alt="Card 2" style={{ margin: '10px' }}/>
                <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" width={200} height={150} alt="Card 3" style={{ margin: '10px' }}/>
                <Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" width={200} height={150} alt="Card 4" style={{ margin: '10px' }}/>
                <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" width={200} height={150} alt="Card 5" style={{ margin: '10px' }}/>
                <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" width={200} height={150} alt="Card 1" style={{ margin: '10px' }}/>
                <Image src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" width={200} height={150} alt="Card 2" style={{ margin: '10px' }}/>
                <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" width={200} height={150} alt="Card 3" style={{ margin: '10px' }}/>
                <Image src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" width={200} height={150} alt="Card 4" style={{ margin: '10px' }}/>
                <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" width={200} height={150} alt="Card 5" style={{ margin: '10px' }}/>

            </div>
            <h3 style={{ textAlign: 'center', fontSize: '2em', color: '#FFD700' }}>Every developer deserves to be a great engineer, a 100xEngineer!</h3>
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>Give yourself the power you deserve with 100xdevs today!</p>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="https://play.google.com/store/apps/details?id=com.hundredx.devs" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px', padding: '10px 20px', backgroundColor: '#DC143C', borderRadius: '5px' }}>Download App</a>
                <a href="https://harkirat.classx.co.in/new-courses" style={{ textDecoration: 'none', color: '#FFFFE0', padding: '10px 20px', backgroundColor: '#DC143C', borderRadius: '5px' }}>Join Now</a>
            </div>
            <Image src="https://app.100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMockup.01b5ae40.png&w=1920&q=75" width={500} height={300} alt="Mockup" style={{ display: 'block', margin: '20px auto' }}/>
            <div style={{ textAlign: 'center'}}>
                <Image src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" width={100} height={100} alt="Logo" style={{ marginBottom: '10px' }}/>
                <p style={{fontSize: '1.5em', fontWeight:'bold'}}>100xDevs<br/>because 10x ain't enough.</p>
                <a href="https://app.100xdevs.com/" style={{ textDecoration: 'none', color: '#FFFFE0' }}>Visit 100xDevs</a>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center', color: '#FFFAFA' }}>
                <h4>Follow us</h4>
                <h4>100x Links</h4>
                <a href="https://projects.100xdevs.com/" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px' }}>Projects</a>
                <a href="https://report-100xdevs.vercel.app/" style={{ textDecoration: 'none', color: '#FFFFE0' }}>Report</a>
                <br/>
                <h4>100x Legal</h4>
                <a href="https://app.100xdevs.com/tnc" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px' }}>Terms & Conditions</a>
                <a href="https://app.100xdevs.com/privacy-policy" style={{ textDecoration: 'none', color: '#FFFFE0', marginRight: '20px' }}>Privacy Policy</a>
                <a href="https://app.100xdevs.com/refund" style={{ textDecoration: 'none', color: '#FFFFE0' }}>Refund & Cancellation</a>
            </div>
        </div>
    );
}