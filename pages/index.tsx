import Avatar from "../components/Avatar";
import Meta from '../components/Meta';
import { ViewGridIcon } from '@heroicons/react/solid';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Meta title="Google 2.0 | Ahsan Nazeef" />

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="/avatar.png" />
        </div>
      </header>
    </div>
  );
}
