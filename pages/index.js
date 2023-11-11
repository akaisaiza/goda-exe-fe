import config from "@config/config.json";
import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/partials/Post";
import Sidebar from "@layouts/partials/Sidebar";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import dateFormat from "@lib/utils/dateFormat";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { useState } from 'react';
const { blog_folder, pagination } = config.settings;

const Home = ({
  banner,
  posts,
  featured_posts,
  recent_posts,
  categories,
  promotion,
}) => {
  // define state
  const sortPostByDate = sortByDate(posts);
  const featuredPosts = sortPostByDate.filter(
    (post) => post.frontmatter.featured
  );
  const showPosts = pagination;
  const [showRecent, setShowRecent] = useState(true);

  return (
    <Base>
      {/* Banner */}
      <section className="section banner relative w-full">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src={"/images/banner-bg-shape.svg"}
          width={1905}
          height={295}
          alt="banner-shape"
          priority
        />

        <div className="container ">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className={banner.image_enable ? "mt-12 text-center lg:mt-0 lg:text-left lg:col-6" : "mt-12 text-center lg:mt-0 lg:text-left lg:col-12"}>
              <div className="banner-title">
                {markdownify(banner.title, "h2")}
              </div>
              {markdownify(banner.content, "p", "mt-4")}
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-6"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              {banner.button.enable && (
                <Link
                  className=" btn btn-primary bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent mt-6"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  Watcher Video
                </Link>
              )}
            </div>
            {banner.image_enable && (
              <div className="col-9 lg:col-6 rounded-[10px]">
                <ImageFallback
                  className="mx-auto object-contain rounded-[10px]"
                  src={banner.image}
                  width={648}
                  height={643}
                  priority={true}
                  alt="Banner Image"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      {featured_posts.enable && (
        <div className=" mt-6 rounded border border-border p-6 dark:border-darkmode-border items-center justify-center">
          <h3 className="section-title mb-12 text-center">Trending</h3>
          <div className="mb-12 flex items-center justify-center">
            <button
              className={`btn px-5 py-2 ${showRecent ? "btn-outline-primary" : "btn-primary"
                }`}
              onClick={() => setShowRecent(false)}
            >
              Featured
            </button>
            <button
              className={`btn ml-3  px-5 py-2 ${showRecent ? "btn-primary" : "btn-outline-primary"
                }`}
              onClick={() => setShowRecent(true)}
            >
              Recent
            </button>
          </div>
          <div className="grid grid-cols-6 gap-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-8  w-700 pa-10">
            {posts.map((post, i) => (
              <div className="flex flex-col items-center justify-center" key={`key-${i}`}>
                {post.frontmatter.image && (
                  <img
                    className="mb-2 h-[85px] w-[85px] rounded-full object-cover"
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                  />
                )}
                <div className="text-center">
                  <h3 className="text-sm font-semibold">
                    <a
                      href={`/${blog_folder}/${post.slug}`}
                      className="hover:text-primary"
                    >
                      {post.frontmatter.title}
                    </a>
                  </h3>
                  <p className="text-xs text-gray-500">
                    {dateFormat(post.frontmatter.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>



        </div>
      )}
      {/* Home main */}
      <section className="section">
        <div className="container">
          <div className="row items-start">
            <div className="mb-12 lg:mb-0 lg:col-8">
              {/* mb-12 lg:mb-0 lg:col-8 */}
              {/* Featured posts */}
              {featured_posts.enable && (
                <div className="section">
                  {markdownify(featured_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border p-6 dark:border-darkmode-border">
                    <div className="row">
                      <div className="md:col-6">
                        <Post post={featuredPosts[0]} />
                      </div>
                      <div className="scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6">
                        {featuredPosts
                          .slice(1, featuredPosts.length)
                          .map((post, i, arr) => (
                            <div
                              className={`mb-6 flex items-center pb-6 ${i !== arr.length - 1 &&
                                "border-b border-border dark:border-darkmode-border"
                                }`}
                              key={`key-${i}`}
                            >
                              {post.frontmatter.image && (
                                <ImageFallback
                                  className="mr-3 h-[85px] rounded object-cover"
                                  src={post.frontmatter.image}
                                  alt={post.frontmatter.title}
                                  width={105}
                                  height={85}
                                />
                              )}
                              <div>
                                <h3 className="h5 mb-2">
                                  <Link
                                    href={`/${blog_folder}/${post.slug}`}
                                    className="block hover:text-primary"
                                  >
                                    {post.frontmatter.title}
                                  </Link>
                                </h3>
                                <p className="inline-flex items-center font-bold">
                                  <FaRegCalendar className="mr-1.5" />
                                  {dateFormat(post.frontmatter.date)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Promotion
              {promotion.enable && (
                <Link href={promotion.link} className="section block pt-0">
                  <ImageFallback
                    className="h-full w-full"
                    height="115"
                    width="800"
                    src={promotion.image}
                    alt="promotion"
                  />
                </Link>
              )} */}

              {/* Recent Posts */}
              {recent_posts.enable && (
                <div className="section pt-0 items-center justify-center ">
                  {markdownify(recent_posts.title, "h2", "section-title")}
                  <div className="rounded border border-border px-6 pt-6 dark:border-darkmode-border">
                    <div className="row">
                      {sortPostByDate.slice(0, showPosts).map((post) => (
                        <div className="mb-8 md:col-6" key={post.slug}>
                          <Post post={post} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <Pagination
                totalPages={Math.ceil(posts.length / showPosts)}
                currentPage={1}
              />
            </div>
            {/* sidebar */}
            <Sidebar
              className={"lg:mt-[9.5rem]"}
              posts={posts}
              categories={categories}
            />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
