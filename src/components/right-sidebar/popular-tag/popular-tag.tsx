import RenderTag from "@/components/shared/render-tag";
import { fetchPopularTags } from "@/lib/actions/fetch-popular-tag.action";

export default async function PopularTag() {
  const popularTags = await fetchPopularTags();

  return (
    <div className="mt-16">
      <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
      <div className="mt-7 flex flex-col gap-4">
        {popularTags.map((tag) => (
          <RenderTag
            key={tag.id}
            tid={tag.id}
            tagname={tag.name}
            totalQuestions={tag.questionIds.length}
            showCount
          />
        ))}
      </div>
    </div>
  );
}
