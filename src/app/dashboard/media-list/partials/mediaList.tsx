import MediaCard from "./mediaCard";
import { getUserMediaAction } from "./medialist.action";
import MediaListPagination from "./mediaListPagination";
import { Chip } from "@mui/material";
import MediaActions from "./mediaAction";

export default async function mediaCards({
  page,
  itemPerPage,
}: {
  page: number;
  itemPerPage: number;
}) {
  const mediaList = await getUserMediaAction({
    page,
    item_per_page: itemPerPage,
  });
  const totalPages=Math.ceil((mediaList?.pagination.total_count)/itemPerPage)
  return (
    <div>
      <h1>لیست مدیاهای من</h1>
      {mediaList?.data.map((m) => (
        <MediaCard key={m.id} media={m} >
          <div>
            <div>
            {m.publishedAt && <Chip label="منتشرشده" size="small" />}
            </div>
            <div className="flex justify-between">
             <span> {m.user.fullName}</span>
              <span>{m.createdAt}</span>
            </div>
            <div>
<MediaActions media={m} />
            </div>
          </div>
        </MediaCard>
      ))}
      <div className="flex justify-center mt-6">
        <MediaListPagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
