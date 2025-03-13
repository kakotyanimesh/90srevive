import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', backgroundColor: '#008080', color: '#FFFFE0' }}>
            <h1 style={{ textAlign: 'center', fontSize: '4em', textShadow: '2px 2px #000080' }}>Select your cookie preferences</h1>
            <p>We use essential cookies and similar tools that are necessary to provide our site and services. We use performance cookies to collect anonymous statistics, so we can understand how customers use our site and make improvements. Essential cookies cannot be deactivated, but you can choose “Customize” or “Decline” to decline performance cookies.</p>
            <p>If you agree, AWS and approved third parties will also use cookies to provide useful site features, remember your preferences, and display relevant content, including relevant advertising. To accept or decline all non-essential cookies, choose “Accept” or “Decline.” To make more detailed choices, choose “Customize.”</p>
            <div style={{ textAlign: 'center' }}>
                <button style={{ backgroundColor: '#FFD700', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Accept</button>
                <button style={{ backgroundColor: '#FFA07A', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Decline</button>
                <button style={{ backgroundColor: '#FFFFE0', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Customize</button>
            </div>

            <h1 style={{ textAlign: 'center', fontSize: '4em', textShadow: '2px 2px #000080' }}>Customize cookie preferences</h1>
            <p>We use cookies and similar tools (collectively, "cookies") for the following purposes.</p>
            <div>
                <h3>Essential</h3>
                <p>Essential cookies are necessary to provide our site and services and cannot be deactivated. They are usually set in response to your actions on the site, such as setting your privacy preferences, signing in, or filling in forms.</p>
                <h3>Performance</h3>
                <p>Performance cookies provide anonymous statistics about how customers navigate our site so we can improve site experience and performance. Approved third parties may perform analytics on our behalf, but they cannot use the data for their own purposes.</p>
                <button style={{ backgroundColor: '#FFD700', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Allow performance category</button>
                <p>Allowed</p>
                <h3>Functional</h3>
                <p>Functional cookies help us provide useful site features, remember your preferences, and display relevant content. Approved third parties may set these cookies to provide certain site features. If you do not allow these cookies, then some or all of these services may not function properly.</p>
                <button style={{ backgroundColor: '#FFD700', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Allow functional category</button>
                <p>Allowed</p>
                <h3>Advertising</h3>
                <p>Advertising cookies may be set through our site by us or our advertising partners and help us deliver relevant marketing content. If you do not allow these cookies, you will experience less relevant advertising.</p>
                <button style={{ backgroundColor: '#FFD700', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Allow advertising category</button>
                <p>Allowed</p>
                <p>Blocking some types of cookies may impact your experience of our sites. You may review and change your choices at any time by selecting Cookie preferences in the footer of this site. We and selected third-parties use cookies or similar technologies as specified in the <a href="https://aws.amazon.com/legal/cookies/">AWS Cookie Notice</a>.</p>
                <button style={{ backgroundColor: '#FFA07A', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Cancel</button>
                <button style={{ backgroundColor: '#FFD700', padding: '10px 20px', margin: '10px', fontSize: '1.2em', borderRadius: '5px', border: '2px solid #800000' }}>Save preferences</button>
            </div>


            <h1 style={{ textAlign: 'center', fontSize: '4em', textShadow: '2px 2px #000080' }}>Your privacy choices</h1>
            {/* ...rest of the content similarly styled... */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src="https://d22k7geae6sy8h.cloudfront.net/files/64b93bc5734231000807408f/8lkb7n72g-aws-credits.png" width={500} height={300} alt="AWS Credits" />
            </div>

            {/* ... more content with similar styling ...*/}
             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://a16z.com/"><Image src="https://d22k7geae6sy8h.cloudfront.net/files/64b938937342310008074089/8lkb75ouw-andressenhorowitz-log.png" width={100} height={100} alt="Andreessen Horowitz Logo" /></a>
                <a href="https://www.sequoiacap.com/"><Image src="https://d22k7geae6sy8h.cloudfront.net/files/64b938c7734231000807408a/8lkb76sgu-sequoia-log.png" width={100} height={100} alt="Sequoia Capital Logo" /></a>
                {/* ...rest of logos... */}
            </div>

        </div>
    );
}