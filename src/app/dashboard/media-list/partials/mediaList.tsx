import MediaCard from "./mediaCard";
import { getUserMediaAction } from "./medialist.action";

export default async function mediaCards({page,itemPerPage}:{page:number,itemPerPage:number}) {
  const mediaList = await getUserMediaAction({page,item_per_page:itemPerPage})
  return (
    <div>
      <h1>لیست مدیاهای من</h1>
      {mediaList?.map((m) => (
        <MediaCard key={m.id} media={m} />
      ))}
    </div>
  );
}
