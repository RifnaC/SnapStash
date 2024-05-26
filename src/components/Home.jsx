import { useEffect, useState,  } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import banner from '../assets/image-01.jpg'
import banner2 from '../assets/image-02.jpg'
import banner3 from '../assets/image-03.jpg'


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      {/* Banner Section start*/}
      <section className="py-10 ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div className="relative mb-8 h-[370px] md:h-[480px]">
                <img
                  src={banner}
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />

                <div
                  className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12"
                >
                  <div className="max-w-[420px]">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="mb-5 block text-2xl font-bold text-dark hover:text-[#00717C]  sm:text-4xl"
                      >
                        Mega Sale Up To 50% Off For All
                      </a>
                    </h3>
                    <p className="mb-9 text-base text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                      Integer ac accumsan nunc.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="inline-flex items-center justify-center rounded-md bg-[#00717C] px-7 py-[13px] text-center text-base font-medium text-white hover:bg-[#2f4f52]"
                    >
                      Grab The Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-8 h-[223px]">
                    <img
                      src={banner2}
                      alt="product"
                      className="h-full w-full object-cover object-center"
                    />

                    <div
                      className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9"
                    >
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <a
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-[#00717C]  xl:text-2xl"
                          >
                            Summer Travel Collection
                          </a>
                        </h3>
                        <a
                          href="javascript:void(0)"
                          className="text-base font-medium text-dark hover:text-[#00717C] "
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-full">
                  <div className="relative mb-8 h-[223px]">
                    <img
                      src={banner3}
                      alt="product"
                      className="h-full w-full object-cover object-center"
                    />

                    <div
                      className="absolute left-0 top-0 flex h-full w-full items-end justify-end p-6 sm:p-9"
                    >
                      <div className="max-w-[180px] text-right">
                        <h3>
                          <a
                            href="javascript:void(0)"
                            className="mb-3 block text-xl font-bold text-dark hover:text-[#00717C]  xl:text-2xl"
                          >
                            Get 30% Off On iPhone
                          </a>
                        </h3>
                        <a
                          href="javascript:void(0)"
                          className="text-base font-medium text-dark hover:text-[#00717C] "
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}

      {/* <!-- ====== Products Carousel Section Start --> */}
      <section className="pb-8 pt-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[65px] max-w-[510px] text-center">
                <h2
                  className="mb-4 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px] md:leading-[1.2]"
                >
                  You may also like
                </h2>
                <span
                  className="mx-auto mb-[18px] block h-[3px] w-[100px] bg-[#00717C] "
                ></span>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>


    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Products</h1>
      
        {products.map((product) => (
          <div key={product.id} className="px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{product.title}</h2>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <p className="text-gray-500 truncate">{product.description}</p>
              </div>
            </div>
          </div>
        ))}

    </div>

        </div>
      </section>
      {/* <!-- ====== Products Carousel Section End --> */}


      </>
      );
};

      export default Home;