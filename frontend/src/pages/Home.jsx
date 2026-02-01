import { useEffect, useState } from "react";
import ArticleService from "../services/article.service";
import UserSidebar from "../components/user/UserSidbar";
import BlogList from "../components/user/BlogList";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [totalArticles, setTotalArticles] = useState(0);

  const fetchArticles = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const offset = (pageNumber - 1) * limit;
      const data = await ArticleService.getArticles({ limit, offset });

      setArticles(data.articles || []);
      setTotalArticles(data.articlesCount || 0);
      setPage(pageNumber);
    } catch (error) {
      console.error("Erreur chargement articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(1);
  }, []);

  const handleFavorite = async (e, blog) => {
    e.preventDefault();

    const isFavorited = blog.favorited;

    // Optimistic UI update
    setArticles((prev) =>
      prev.map((a) =>
        a.slug === blog.slug
          ? {
              ...a,
              favorited: !isFavorited,
              favoritesCount: isFavorited
                ? a.favoritesCount - 1
                : a.favoritesCount + 1,
            }
          : a
      )
    );

    try {
      let updatedArticle;
      if (isFavorited) {
        updatedArticle = await ArticleService.removeFromFavorites(blog.slug);
      } else {
        updatedArticle = await ArticleService.addToFavorites(blog.slug);
      }

      setArticles((prev) =>
        prev.map((a) => (a.slug === blog.slug ? updatedArticle : a))
      );
    } catch (error) {
      console.error("Erreur favori:", error);
      fetchArticles(page);
    }
  };

  const totalPages = Math.max(1, Math.ceil(totalArticles / limit));

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <UserSidebar />

      <div className="ml-64 px-6 py-10 w-full">
        {loading && (
          <p className="text-center text-gray-500 animate-pulse">
            Chargement...
          </p>
        )}

        {!loading && articles.length === 0 && (
          <p className="text-center text-gray-500">Aucun article trouvé.</p>
        )}

        {/* Blog List Component */}
        <BlogList articles={articles} onToggleFavorite={handleFavorite} />

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={() => fetchArticles(page - 1)}
            disabled={page === 1 || loading}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Précédent
          </button>

          <span className="flex items-center text-gray-700 font-semibold">
            Page {page} / {totalPages}
          </span>

          <button
            onClick={() => fetchArticles(page + 1)}
            disabled={page >= totalPages || loading}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
