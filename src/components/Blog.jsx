import blog_links from "../constants/blog_links";

export const Blog = () => {
  return (
    <div className="fade-in mt-14">
      <div className="text-center text-5xl md:text-6xl cursor-default mb-4">
        Articles Published
      </div>
      <div className="w-40 h-1 mb-14 bg-primary mx-auto rounded"></div>
      <div className="flex flex-wrap justify-center mb-14">
        {blog_links?.map((blog, id) => {
          return (
            <div
              key={blog?.id}
              className="card card-compact w-96 bg-gray-800 hover:bg-gray-900 shadow-xl m-4"
            >
              <figure>
                <img src={blog?.imgUrl} alt="blog" />
              </figure>
              <div className="card-body">
                <h2 className="card-title cursor-default">{blog?.title}</h2>
                <div className="card-actions justify-end">
                  {blog?.tags?.map((tag) => {
                    return (
                      <div
                        key={tag?.id}
                        className={`badge text-base badge-${tag?.color} p-3`}
                      >
                        {tag?.tag}
                      </div>
                    );
                  })}
                </div>
                <p className="cursor-default">{blog?.details}</p>
                <div className="card-actions justify-end">
                  <a href={blog?.link} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
