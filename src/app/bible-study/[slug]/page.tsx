import { notFound } from "next/navigation";
import { MOCK_BIBLE_STUDIES } from "@/lib/mock-data/bible-studies";
import StudyDetailPage from "@/components/study-detail/StudyDetailPage";

export default async function BibleStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = MOCK_BIBLE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return <StudyDetailPage study={study} />;
}
