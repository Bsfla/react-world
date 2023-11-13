import { Pagination } from '@/composables/Pagination';
import { ArticlePreview } from '@/pageComponents/Article/ArticlePreview';
import ArticleTab from '@/pageComponents/Article/ArticleTab';
import Banner from '@/pageComponents/Home/Banner';
import { TagList } from '@/pageComponents/Home/TagList';

const HomePage = () => {
  return (
    <>
      <Banner />
      <section className="w-1080 mx-auto flex flex-items justify-between gap-3">
        <div className="flex-col flex-1">
          <ArticleTab />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <Pagination />
        </div>
        <TagList />
      </section>
    </>
  );
};

export default HomePage;
