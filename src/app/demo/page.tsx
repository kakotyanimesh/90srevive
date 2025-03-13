import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#008080', color: '#FFFFE0' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3em', color: '#FFD700' }}>Tezpur University</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Image src="/ms_img/Stview.png" alt="Standard View" width={50} height={50} style={{ marginRight: '10px' }} />
                <Image src="/ms_img/red_button.gif" alt="White on Black" width={50} height={50} style={{ marginRight: '10px' }} />
                <Image src="/ms_img/green_button.gif" alt="Black on White" width={50} height={50} style={{ marginRight: '10px' }} />
                <Image src="/ms_img/orange_button.gif" alt="White on Blue" width={50} height={50} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Image src="/ms_img/font_decrease.gif" alt="Decrease font size" width={30} height={30} style={{ marginRight: '10px' }} />
                <Image src="/ms_img/font_reset.gif" alt="Reset font size" width={30} height={30} style={{ marginRight: '10px' }} />
                <Image src="/ms_img/font_increase.gif" alt="Increase font size" width={30} height={30} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="https://www.tezu.ernet.in/Screenreader.htm" style={{ textDecoration: 'underline', color: '#FFFACD' }}>Screen Reader</a> | <a href="https://www.tezu.ernet.in/index.html#main_content" style={{ textDecoration: 'underline', color: '#FFFACD' }}>Skip to Main</a>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="https://www.tezu.ernet.in/academic/admission2025/" style={{ textDecoration: 'underline', color: '#FFFACD' }}><Image src="/images/button_admissions25.png" alt="Admissions" width={150} height={50}/></a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <a href="https://www.facebook.com/TezpurUniversity/" style={{ marginRight: '10px' }}><Image src="/images/fb.png" alt="Facebook" width={30} height={30} /></a>
                <a href="https://twitter.com/TezpurUniv" style={{ marginRight: '10px' }}><Image src="/images/tt.png" alt="Twitter" width={30} height={30} /></a>
                <a href="https://www.youtube.com/c/TezpurUniversity94" style={{ marginRight: '10px' }}><Image src="/images/yt.png" alt="YouTube" width={30} height={30} /></a>
                <a href="https://www.linkedin.com/school/tezpur-university/" style={{ marginRight: '10px' }}><Image src="/images/lkdn.png" alt="LinkedIn" width={30} height={30} /></a>
                <a href="https://www.instagram.com/tezpur.uni/"><Image src="/images/insta.png" alt="Instagram" width={30} height={30} /></a>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="https://www.tezu.ernet.in/PwD/pwd.htm" style={{ textDecoration: 'underline', color: '#FFFACD', marginRight: '10px' }}>PwD Info</a>
                <a href="https://www.tezu.ernet.in/contact/keyfunctionaries.html" style={{ textDecoration: 'underline', color: '#FFFACD', marginRight: '10px' }}>Contacts</a>
                <a href="http://www.tezu.ernet.in/alumniportal.html" style={{ textDecoration: 'underline', color: '#FFFACD', marginRight: '10px' }}>Alumni</a>
                <a href="https://www.tezu.ernet.in/intranet/" style={{ textDecoration: 'underline', color: '#FFFACD', marginRight: '10px' }}>Intranet</a>
                <a href="http://webmail.tezu.ernet.in/" style={{ textDecoration: 'underline', color: '#FFFACD', marginRight: '10px' }}>Webmail</a>
                <a href="https://www.tezu.ernet.in/indexh.html" style={{ textDecoration: 'underline', color: '#FFFACD' }}>हिंदी संस्करण</a>
            </div>
            {/* ...rest of the content following a similar pattern... */}
        </div>
    );
}