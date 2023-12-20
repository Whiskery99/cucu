import { useState } from "react"

export default function CopyTradesComp() {
    const [messageOne, setMessageOne] = useState(false)
    const [messageTwo, setMessageTwo] = useState(false)
    const [messageThree, setMessageThree] = useState(false)
    const [messageFour, setMessageFour] = useState(false)
    const [messageFive, setMessageFive] = useState(false)
    const [messageSix, setMessageSix] = useState(false)

    const handleCopyOne = () => {
        setMessageOne(true)
        setTimeout(() => {
            setMessageOne(false)
        }, 2000)
    }
    const handleCopyTwo = () => {
        setMessageTwo(true)
        setTimeout(() => {
            setMessageTwo(false)
        }, 2000)
    }
    const handleCopyThree = () => {
        setMessageThree(true)
        setTimeout(() => {
            setMessageThree(false)
        }, 2000)
    }
    const handleCopyFour = () => {
        setMessageFour(true)
        setTimeout(() => {
            setMessageFour(false)
        }, 2000)
    }
    const handleCopyFive = () => {
        setMessageFive(true)
        setTimeout(() => {
            setMessageFive(false)
        }, 2000)
    }
    const handleCopySix = () => {
        setMessageSix(true)
        setTimeout(() => {
            setMessageSix(false)
        }, 2000)
    }
    return (
        <div className="bg-white py-5 space-y-10 rounded-lg px-3">
            <h2>Copy trades from experts</h2>
            {/* Content for Profile Details tab */}
            <div className={`border-t-4 border-cyan-600 rounded-md p-3 shadow-lg flex items-center justify-between  ${messageOne ? 'border-green-400' : 'border-cyan-600 '}`}>
                <div className="flex items-center gap-2">
                    <img src="/trader-1.jpg" alt="main pics" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-sm tracking-wide font-semibold">Derick Duke</p>
                        <p className="text-xs">@investmiami</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span><span className="text-green-400">10%</span> Bonus</span>
                    <button onClick={handleCopyOne} className={`text-xs px-3 py-2 text-white font-semibold rounded-md transition-all ease-in-out duration-400 ${messageOne ? 'bg-green-400' : 'bg-gray-400 '}`}>{messageOne ? 'Copied!' : 'Copy Trade'}</button>
                </div>
            </div>
            <div className={`border-t-4 border-cyan-600 rounded-md p-3 shadow-lg flex items-center justify-between  ${messageTwo ? 'border-green-400' : 'border-cyan-600 '}`}>
                <div className="flex items-center gap-2">
                    <img src="/trader-2.jpg" alt="main pics" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-sm tracking-wide font-semibold">Brandson Clark</p>
                        <p className="text-xs">@funbuying</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span><span className="text-green-400">32%</span> Bonus</span>
                    <button onClick={handleCopyTwo} className={`text-xs px-3 py-2 text-white font-semibold rounded-md transition-all ease-in-out duration-400 ${messageTwo ? 'bg-green-400' : 'bg-gray-400 '}`}>{messageTwo ? 'Copied!' : 'Copy Trade'}</button>
                </div>
            </div>
            <div className={`border-t-4 border-cyan-600 rounded-md p-3 shadow-lg flex items-center justify-between  ${messageThree ? 'border-green-400' : 'border-cyan-600 '}`}>
                <div className="flex items-center gap-2">
                    <img src="/trader-3.jpg" alt="main pics" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-sm tracking-wide font-semibold">Mirabel McDonald</p>
                        <p className="text-xs">@bearishgirl</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span><span className="text-green-400">40%</span> Bonus</span>
                    <button onClick={handleCopyThree} className={`text-xs px-3 py-2 text-white font-semibold rounded-md transition-all ease-in-out duration-400 ${messageThree ? 'bg-green-400' : 'bg-gray-400 '}`}>{messageThree ? 'Copied!' : 'Copy Trade'}</button>
                </div>
            </div>
            <div className={`border-t-4 border-cyan-600 rounded-md p-3 shadow-lg flex items-center justify-between  ${messageFour ? 'border-green-400' : 'border-cyan-600 '}`}>
                <div className="flex items-center gap-2">
                    <img src="/trader-4.jpg" alt="main pics" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-sm tracking-wide font-semibold">Sandra Micheal</p>
                        <p className="text-xs">@sandychain</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span><span className="text-green-400">28%</span> Bonus</span>
                    <button onClick={handleCopyFour} className={`text-xs px-3 py-2 text-white font-semibold rounded-md transition-all ease-in-out duration-400 ${messageFour ? 'bg-green-400' : 'bg-gray-400 '}`}>{messageFour ? 'Copied!' : 'Copy Trade'}</button>
                </div>
            </div>
            <div className={`border-t-4 border-cyan-600 rounded-md p-3 shadow-lg flex items-center justify-between  ${messageFive ? 'border-green-400' : 'border-cyan-600 '}`}>
                <div className="flex items-center gap-2">
                    <img src="/trader-5.jpg" alt="main pics" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-sm tracking-wide font-semibold">Richard Lucy</p>
                        <p className="text-xs">@lucifer</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span><span className="text-green-400">55%</span> Bonus</span>
                    <button onClick={handleCopyFive} className={`text-xs px-3 py-2 text-white font-semibold rounded-md transition-all ease-in-out duration-400 ${messageFive ? 'bg-green-400' : 'bg-gray-400 '}`}>{messageFive ? 'Copied!' : 'Copy Trade'}</button>
                </div>
            </div>
            <div className={`border-t-4 border-cyan-600 rounded-md p-3 shadow-lg flex items-center justify-between  ${messageSix ? 'border-green-400' : 'border-cyan-600 '}`}>
                <div className="flex items-center gap-2">
                    <img src="/trader-6.jpg" alt="main pics" className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-sm tracking-wide font-semibold">Akahaz Dhali</p>
                        <p className="text-xs">@primettrader</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span><span className="text-green-400">81%</span> Bonus</span>
                    <button onClick={handleCopySix} className={`text-xs px-3 py-2 text-white font-semibold rounded-md transition-all ease-in-out duration-400 ${messageSix ? 'bg-green-400' : 'bg-gray-400 '}`}>{messageSix ? 'Copied!' : 'Copy Trade'}</button>
                </div>
            </div>
        </div>
    )
}