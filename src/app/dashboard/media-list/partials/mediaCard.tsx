import { Media } from "@/src/lib/service/media/type/Media";

export default function mediaCard({ media }: { media: Media }) {
  return (
    <div className="p-4">
      <div>{media.title}</div>
    </div>
  );
}
