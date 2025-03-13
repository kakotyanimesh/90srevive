"use client"

import { useRef, useState } from "react"
import Button from "./Button"
import Notification from "./Notification"
import { NotificationMsgType } from "@/utils/types"
import axios from "axios"
import { url } from "inspector"
import { useRouter } from "next/navigation"

export default function AllButtons () {
    const [showScrapePage, setShowScrapePage] = useState<Boolean>(false)
    const [pageNumber, setPageNumber] = useState<1| 2 | 3>(1)
    const [notificationMsg, setNotificationMsg] = useState<NotificationMsgType>("Crawling website...")
    const [notificationType, setNotificationType] = useState<'err' | 'succes' | 'info'>('info')
    const [notificationDisplay, setNotificationDisplay] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const selectPagesToConvert = () => {
        setShowScrapePage(!showScrapePage)
        // console.log(pageNumber);
        
    }

    const travelBackTo90 = async () => {
        try {
            setNotificationDisplay(true)
            let res 
            if(pageNumber === 1){
                setNotificationMsg('Scraping website...')
                res = await axios.post('api/webscrape', {
                    url : inputRef.current?.value
                })

                res.status === 200 ? setNotificationMsg('Website scraped successfully.') : setNotificationMsg('something went wrong while scrapping... Try again')
                
            } else {
                setNotificationMsg('Crawling website...')
                res = await axios.post('api/webcrawl', {
                    url : inputRef.current?.value
                })

                res.status === 200 ? setNotificationMsg('Website crawled successfully.') : setNotificationMsg('something went wrong while crawling ... Try again ')
            }

            if(res.status === 200){
                setNotificationMsg('Redesigning website...')
                res = await axios.post('api/redesign', {
                    filePath : res.data.filePath,
                    totalPage : pageNumber,
                    baseUrl : inputRef.current?.value
                })

                res.status === 200 ? setNotificationMsg('Website redesigned successfully.') : setNotificationMsg('Something went wrong while converting your website to 90s style')

                
            }
            
        } catch (error) {
            console.log('err while making api req to backend', error);
            
        }
    }

    const visitRedesignedWebsite = () => {
        router.push('/demo')
    }
    return (
            <div className="flex flex-col justify-center items-center gap-4  ">
                <div>
                    <input type="text" ref={inputRef} required placeholder="website url " className=" text-black px-5 py-1 md:w-[450px] rounded-md" />
                </div>
                <div className="flex flex-row md:gap-10 gap-4">
                    <div>
                        <Button version="primary" title="select pages" onclick={selectPagesToConvert}/>
                        {
                            showScrapePage && (
                                <div className="absolute flex flex-col bg-slate-600 w-36 rounded-2xl mt-3 ">
                                    <Button version="default" title="1 page" onclick={() => {
                                        setShowScrapePage(!showScrapePage)
                                        setPageNumber(1)

                                    }}/>
                                    <Button version="default" title="2 page" onclick={() => {
                                        setShowScrapePage(!showScrapePage)
                                        setPageNumber(2)
                                    }}/>
                                    <Button version="default" title="3 page" onclick={() => {
                                        setShowScrapePage(!showScrapePage)
                                        setPageNumber(3)
                                    }}/>
                                </div>
                            )
                        }
                    </div>
                    <Button version="primary" title="travel back to 90s" onclick={travelBackTo90}/>
                </div>
                <div className="absolute top-20">
                    <Notification type={notificationType} msg={notificationMsg} showNotification={notificationDisplay} />
                </div>
                <div className="absolute bottom-32">
                    {
                        notificationMsg === "Website redesigned successfully." ? (
                            <Button title="visit redesigned Website" version="primary" onclick={visitRedesignedWebsite}/>
                        ) : undefined
                    }
                </div>
            </div>
        
    )
}