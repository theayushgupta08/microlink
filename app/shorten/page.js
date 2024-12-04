"use client"
import React, { useState } from 'react'
import Link from 'next/link'


const Shorten = () => {
    const [url, seturl] = useState("")
    const [shortURL, setshortURL] = useState("")
    const [Generated, setGenerated] = useState("")
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortURL": shortURL
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortURL}`)
                seturl("")
                setshortURL("")
                console.log(result)
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className="flex flex-col items-center justify-center pt-16 space-y-8 bg-orange-100">
            <h1 className="text-3xl font-bold">Generate your <span className='font-bold text-4xl italic text-orange-400'> URL </span></h1>

            <div className="w-4/5 max-w-2xl space-y-4">
                <input
                    value={url}
                    onChange={e => { seturl(e.target.value) }}
                    onFocus={() => setError(false)}
                    onBlur={() => setError(true)}
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                    placeholder="Enter URL here"
                />
                {error && url.length < 5 && <code className='text-red-600 font-normal font-sans text-xs'> *This field should contain atleat 5 characters! </code>}
                <input
                    value={shortURL}
                    onChange={e => { setshortURL(e.target.value) }}
                    onFocus={() => setError2(false)}
                    onBlur={() => setError2(true)}
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
                    placeholder="Enter preffered text here"
                />
                {error2 && shortURL.length < 3 && <code className='text-red-600 font-normal font-sans text-xs'> *This field should contain atleat 3 characters! </code>}

                <button
                    onClick={generate}
                    disabled={url.length < 5 && shortURL.length < 3}
                    className="w-full p-3 text-white font-bold bg-orange-500 rounded hover:bg-orange-600"
                >
                    Generate URL
                </button>
            </div>

            {Generated && <> <span className='font-bold text-lg'> Your Link:</span> <code>
                <Link target='_blank' href={Generated}>{Generated}</Link>
            </code> </>}
        </div>

    )
}

export default Shorten
