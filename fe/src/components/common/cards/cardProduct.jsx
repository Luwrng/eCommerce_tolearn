import React, { useState } from "react";


function CardProduct({
    imageUrl,
    salePrice,
    titleProduct,
    descriptionProduct,
    originPrice,
    discount,
    rating,
    viewDetail,
    viewCount,
    isSale,
    isNew
}) {
    const [isHover, setIsHover] = useState(false);
    const [isShowDetail, setIsShowDetail] = useState(false);

    return (
        <div className={`bg-[#F4F5F7] h-full w-full md:w-1/4 relative group hover:shadow-lg transition-all duration-300 overflow-hidden`}>
            <img src={imageUrl} alt={titleProduct} />
            <div className="pt-4 px-4 pb-1">
                <h3 className="text-lg font-bold">{titleProduct}</h3>
                <p className="text-sm text-[#898989] py-1">{descriptionProduct}</p>

            </div>
            <div className="pb-6 px-4 flex justify-between">
                <h4 className="text-lg text-[#3A3A3A] " >{discount}</h4>
                <p className="text-sm text-[#B0B0B0] relative before:block before:absolute before:top-1/3 before:left-0  before:w-full before:bg-[#B0B0B0] before:h-[1px] before:content-['']">{originPrice}</p>
            </div>
            <div className="p-2">
                {isSale && typeof salePrice === 'number' && (
                    <p className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#E97171] text-white text-[10px] flex items-center justify-center">-{salePrice}%</p>
                )}
                {isNew && (
                    <p className="absolute top-2 right-12 w-8 h-8 rounded-full bg-[#2EC1AC] text-white text-[10px] flex items-center justify-center">New</p>
                )}
                {rating !== undefined && rating !== null && (
                    <p className="absolute top-12 right-2 rounded-full bg-yellow-400 text-black text-xs px-2 py-0.5">{rating}</p>
                )}
                {viewCount && (
                    <p className="text-sm text-gray-500">{viewCount}</p>
                )}
            </div>
            <div className="p-3 absolute bottom-0 w-full justify-center flex bg-[#faebd7] border-t border-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out group-hover:pointer-events-auto">
                <p className="text-sm text-gray-500 pointer-events-auto">{viewDetail}</p>
            </div>
        </div>
    )
}

export default CardProduct;