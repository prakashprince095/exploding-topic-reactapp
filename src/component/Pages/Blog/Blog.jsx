import Header from "@/component/ui/Header/Header";
import Footer from "@/component/ui/Footer/Footer";
import FeaturedBlog from "./FeaturedBlog";
import BlogCardList from "./BlogCardList";
const Blog = () => {
  return (
    <>
      <Header></Header>
      <FeaturedBlog></FeaturedBlog>
      <BlogCardList></BlogCardList>
      <Footer></Footer>
    </>
  );
};
export default Blog;
