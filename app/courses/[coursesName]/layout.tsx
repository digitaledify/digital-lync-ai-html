/* eslint-disable @typescript-eslint/no-explicit-any */
import { courseData } from "@/utils/CourseData";

export async function generateMetadata({ params }: { params: any}) {
  const course: any = courseData.find((course: any) => course.courseUrl === params.name);

  return {
    title: course?.pageTitle || "Skill Capital - Course",
    description: course?.pageDescription || "Learn top skills online with Skill Capital.",
  };
}

export default function Layout({ children }: { children: any}) {
  return <>{children}</>;
}
