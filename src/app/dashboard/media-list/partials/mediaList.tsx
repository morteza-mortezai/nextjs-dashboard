import MediaCard from "./mediaCard";
import { getUserMediaAction } from "./medialist.action";
import MediaListPagination from "./mediaListPagination";

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
        <MediaCard key={m.id} media={m} />
      ))}
      <div>
        <MediaListPagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
