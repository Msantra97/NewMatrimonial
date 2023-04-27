import React from 'react'

export default function Gallery() {
    return (

<>      
<div className=' flex  justify-center'>
<h2 className='text-4xl mt-6 mb-6 font-[cursive]'>Our Gallery</h2>
</div>

        <div className="grid grid-cols-2 mt-2 mb-2 px-4 py-4 md:grid-cols-4 gap-4" id='gallery'>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic1.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic2.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic3.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic4.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic5.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic6.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic7.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic8.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic9.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic10.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic11.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic12.jpg" alt="" />
                </div>
            </div>

            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic13.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic14.jpg" alt="" />
                    </div>
            </div>
            <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic15.jpg" alt="" />
                    </div>
            </div>
            <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic16.jpg" alt="" />
                    </div>
            </div>

        </div>

        </>
    )
}
