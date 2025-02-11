import React, { useState, useEffect, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const windowSize=window.innerWidth;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalApi.getTrendingVideos(); // Now this will call the function correctly
      setMovieList(resp.data.results);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  const sliderRight = (element) => {
    element.scrollLeft += windowSize-110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= windowSize-110;
  };
  return (
    <div>
      <div>
        <HiChevronLeft
          className="hidden md:block text-white text-[30px] absolute
         mx-8 mt-[150px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="hidden md:block text-white text-[30px] absolute
         mx-8 mt-[150px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto w-full px-16 py-4
        scrollbar-hide scroll-smooth "
        ref={elementRef}>
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] 
            object-cover object-left-top mr-5 rounded-md
             hover:border-[4px] border-gray-300
             transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
