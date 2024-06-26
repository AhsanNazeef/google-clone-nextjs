/* eslint-disable @next/next/no-img-element */

function Avatar({ url }) {
  return (
    <img
      className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110`}
      loading="lazy"
      src={url}
      alt="avatar"
    />
  );
}

export default Avatar;
