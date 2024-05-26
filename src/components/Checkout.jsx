
const Checkout = () => {
    return (
        <section className="bg-white py-8 md:py-16">
            <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h1 className="text-2xl font-semibold text-center text-gray-900">Checkout</h1>

                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div className="min-w-0 flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 ">Delivery Details</h2>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 "> Your name </label>
                                    <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900" placeholder="Name" required />
                                </div>

                                <div>
                                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 "> Your email* </label>
                                    <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900" placeholder="Email" required />
                                </div>

                                <div>
                                    <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 "> Phone Number* </label>
                                    <div className="flex items-center">
                                        
                                        <div id="dropdown-phone-3" className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        </div>
                                        <div className="relative w-full">
                                            <input type="Number" id="phone-input" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900" pattern="[0-9]{10}" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-900 ">Address </label>
                                    <input type="text" id="address" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900" placeholder="Address" required />
                                </div>

                                
                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900 "> City* </label>
                                    </div>
                                    <select id="select-city-input-3" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900">
                                        <option selected>Calicut</option>
                                        <option value="kochi">Kochi</option>
                                        <option value="tirur">Tirur</option>
                                        <option value="malappuram">Malappuram</option>
                                        <option value="kannur">Kannur</option>
                                    </select>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select-country-input-3" className="block text-sm font-medium text-gray-900 "> Country* </label>
                                    </div>
                                    <select id="select-country-input-3" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900">
                                        <option selected>India</option>
                                        <option value="AS">Australia</option>
                                        <option value="FR">France</option>
                                        <option value="ES">Spain</option>
                                        <option value="UK">United Kingdom</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-900 "> State </label>
                                    <input type="text" id="state" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900" placeholder="Pincode" required />
                                </div>
                                

                                <div>
                                    <label htmlFor="pincode" className="mb-2 block text-sm font-medium text-gray-900 "> Pincode </label>
                                    <input type="text" id="pincode" className="block w-full rounded-lg border border-gray-800 p-2.5 text-sm text-gray-900 focus:border-gray-900 focus:ring-gray-900" placeholder="Pincode" required />
                                </div>

                                <div className="sm:col-span-2">
                                    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">
                                        Add Address
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 ">Payment</h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="rounded-lg border border-gray-200 bg-gray-800 p-4 ps-4  ">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="online-payment" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-[#00717C]-600" checked />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="online Payment" className="font-medium leading-none text-gray-900 dark:text-white"> Online Payment </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="pay-on-delivery" className="font-medium leading-none text-gray-900 dark:text-white"> Payment on delivery </label>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

    
                    </div>

                    <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div className="flow-root">
                            <div className="my-6 divide-y divide-gray-200">
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-700">Subtotal</dt>
                                    <dd className="text-base font-medium text-gray-900 ">Rs. 8,094.00</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-700 ">GST</dt>
                                    <dd className="text-base font-medium text-gray-900 ">Rs. 199</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-bold text-gray-900 ">Total</dt>
                                    <dd className="text-base font-bold text-gray-900 ">RS. 8,392.00</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#00717C] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#00717C] focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-[#00717C]-600 dark:hover:bg-[#00717C]-700 dark:focus:ring--800">Proceed to Payment</button>

                           
                        </div>
                    </div>
                </div>
            </form>
        </section>

        

    )
}

export default Checkout