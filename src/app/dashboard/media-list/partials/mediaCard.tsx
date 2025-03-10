import { Media } from "@/src/lib/service/media/type/Media";
import Image from "next/image";
import Chip from "@mui/material/Chip";

export default function mediaCard({
  media,
  children,
}: {
  media: Media;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 border">
      {/* top */}
      <div className="flex items-center gap-3">
        <div className="w-[4rem] relative h-[4rem] border p-1 overflow-hidden rounded">
          {media.avatarPath && (
            <Image src={media.avatarPath} fill alt={media.title} />
          )}
        </div>
        <div className="leading-8">
          <div>{media.title}</div>
          <div className="">{media.follower} دنبال کننده</div>
        </div>
      </div>

      {/* bottom */}
      <div>
        {media.category.name} {media.acceptAds && <Chip label="تبلیغ" size="small" />} 
        {media.readyToExchange && <Chip label="تبادل" size="small" />}
      </div>
      <div>{children}</div>
    </div>
  );
}
