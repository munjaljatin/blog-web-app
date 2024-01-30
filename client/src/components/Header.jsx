import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillAccountBook, AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:tex-white"
      >
        <span className=" px-2 py-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-xl text-white">
          Jatin's
        </span>
        <span className="text-black">Blog</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="ctrl+k"
          rightIcon={AiOutlineSearch}
          className=" hidden lg:inline"
        />
      </form>
      <Button className=" w-14 h-10 rounded-3xl lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
    </Navbar>
  );
}
