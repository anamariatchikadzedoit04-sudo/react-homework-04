import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link
          className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          to="/about"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
