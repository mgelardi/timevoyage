"use client";
import FavoriteAboutPage from "@/components/Favorite/FavoriteAboutPage";
import FavoriteHomePage from "@/components/Favorite/FavoriteHomePage";
import FavoritePhotosPage from "@/components/Favorite/FavoritePhotosPage";
import FavoriteReviewsPage from "@/components/Favorite/FavoriteReviewsPage";
import FavouriteTabs from "@/components/Favorite/tabs";
import { setQueryValue } from "@/redux-toolkit/reducers/FavouritePageSlice";
import { AppDispatch } from "@/redux-toolkit/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Page({ params }: { params: { name: string } }) {
  const { name } = params;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setQueryValue(name));
  }, []);

  const renderPage = () => {
    if (name === "home") {
      return <FavoriteHomePage />;
    } else if (name === "about") {
      return <FavoriteAboutPage />;
    } else if (name === "reviews") {
      return <FavoriteReviewsPage />;
    } else if (name === "photos") {
      return <FavoritePhotosPage />;
    } else if (name === "tab") {
      return <FavouriteTabs />;
    } else {
      return <div>Page not found</div>;
    }
  };
  return renderPage();
}
