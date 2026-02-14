
import React from 'react'

export default function Card(props) {
    const { shoesProp, onDetail, selectedShoes } = props;

    const transferDetail = () => {
        onDetail(shoesProp);
    }


    return (

        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
            <a href="#">
                <img className="rounded-base" src={shoesProp.image} alt />
            </a>
            <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{shoesProp.name}</h5>
            </a>
            <p className="mb-6 text-body">{shoesProp.price}</p>
            <div>
                {/* Modal toggle */}
                <button onClick={transferDetail} data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
                    Xem chi tiết
                </button>
                {/* Main modal */}
                <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                            {/* Modal header */}
                            <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                                <h3 className="text-lg font-medium text-heading">
                                    Thông tin sản phẩm
                                </h3>
                                <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                                <table class="w-full text-sm text-left rtl:text-right text-body">
                                    <tbody>
                                        <tr class="bg-neutral-primary border-b border-default">
                                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                Tên
                                            </th>
                                            <td class="px-6 py-4">
                                                {selectedShoes.name}
                                            </td>
                                        </tr>
                                        <tr class="bg-neutral-primary border-b border-default">
                                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                Giá tiền
                                            </th>
                                            <td class="px-6 py-4">
                                                {selectedShoes.price}
                                            </td>
                                        </tr>
                                        <tr class="bg-neutral-primary border-b border-default">
                                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                Mô tả
                                            </th>
                                            <td class="px-6 py-4">
                                                {selectedShoes.description}
                                            </td>
                                        </tr>
                                        <tr class="bg-neutral-primary border-b border-default">
                                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                Số lượng
                                            </th>
                                            <td class="px-6 py-4">
                                                {selectedShoes.quantity}
                                            </td>
                                        </tr>
                                        <tr class="bg-neutral-primary border-b border-default">
                                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                Hình ảnh
                                            </th>
                                            <td class="px-6 py-4">
                                                <img src={selectedShoes.image} alt="" srcset="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
