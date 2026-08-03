import Cards from "@/components/utils/Cards";
import StaggerGroup from "@/components/animations/StaggerGroup";
import { articles } from "@/data/articles";

type ArticlesListProps = {
  limit?: number;
};

const ArticlesList = ({ limit }: ArticlesListProps) => {
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <StaggerGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {displayedArticles.map((article) => (
        <Cards
          key={article.title}
          image={article.image}
          alt={article.alt}
          title={article.title}
          description={article.description}
          href={article.href}
        />
      ))}
    </StaggerGroup>
  );
};

export default ArticlesList;
