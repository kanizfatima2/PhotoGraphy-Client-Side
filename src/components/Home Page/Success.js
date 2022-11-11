import React from 'react';

const Success = () => {
    return (
        <div>

            <section className="p-4 lg:p-8 bg-gray-800 text-gray-100 mb-8">
                <div className='font-bold text-5xl text-white text-center mb-5'>
                    Success Stories
                </div>
                <div className="container mx-auto space-y-12"> <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://yougraphy-blog.canvera.com/wp-content/uploads/2018/12/wedding-photography-1024x662.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">

                        <h3 className="text-3xl font-bold text-pink-400">Abedin and Surovi Success story</h3>
                        <p className="my-6 text-gray-400">They started out like any ordinary couple, fell in love, got married and had kids. She immersed herself in the role of mother and wife. He worked full-time and saw his role as provider. He was involved in his kids lives, but not to the full extent that his wife was.</p>

                    </div>
                </div>
                </div>
                <div className="container mx-auto space-y-12"> <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">

                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">

                        <h3 className="text-3xl font-bold text-green-300">Mehjaben and Adnan Success story</h3>
                        <p className="my-6 text-gray-400">They started out like any ordinary couple, fell in love, got married and had kids. She immersed herself in the role of mother and wife. He worked full-time and saw his role as provider. He was involved in his kids lives, but not to the full extent that his wife was.</p>

                    </div>
                    <img src="https://content3.jdmagicbox.com/comp/remote/g3/0477px477.x477.170606120743.r3g3/catalogue/aleena-wedding-photography-kayamkulam-alappuzha-photographers-yufjq8dprr.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                </div>
                </div>
            </section>
        </div>
    );
};

export default Success;