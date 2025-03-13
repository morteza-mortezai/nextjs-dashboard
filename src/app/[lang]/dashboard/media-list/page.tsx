import { InvoicesTableSkeleton } from "@/src/components/ui/skeletons";
import { Suspense } from "react";
import MediaList from "./partials/mediaList";

export default async function mediaList(props:{searchParams:Promise<{
  page?:string,query?:string,item_per_page?:string
}>}) {

  const searchParams=await props.searchParams

  const page=Number(searchParams.page)||1
  const itemPerPage=Number(searchParams.item_per_page)||10

  return (
    <main>
      <Suspense key={page + itemPerPage} fallback={<InvoicesTableSkeleton />}>
        <MediaList   page={page} itemPerPage={itemPerPage} />
      </Suspense>
    </main>
  );
}
