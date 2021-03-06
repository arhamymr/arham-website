import { Hero, SectionProject, SectionArticles } from "organisms";
import MainLayout from "layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <SectionArticles />
      <SectionProject />
    </MainLayout>
  )
}
