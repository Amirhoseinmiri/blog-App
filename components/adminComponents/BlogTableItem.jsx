import { assets } from "@/assets/assets";
import Image from "next/image";

const BlogTableItem = ({ authorImg }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          alt="author Image"
        />
      </th>
      <td className=""></td>
    </tr>
  );
};

export default BlogTableItem;
