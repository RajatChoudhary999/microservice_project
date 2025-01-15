import prisma from "../config/db.config.js";
import axios from "axios";

class PostController {
  static async index(req, res) {
    try {
      const posts = await prisma.post.findMany({});

      let userIds = [];
      posts.forEach((item) => {
        userIds.push(item.user_id);
      });

      // Method 1
      let postWithUsers = await Promise.all(
        posts.map(async (post) => {
          const res = await axios.get(
            `${process.env.AUTH_MICRO_URL}/api/getUser/${post.user_id}`
          );

          console.log("the user res", res.data);
          return {
            ...post,
            ...res.data,
          };
        })
      );
      return res.json({ postWithUsers });
    } catch (error) {
      console.log("Post Fetch", error);
      return res.status(500).json({ message: "Something went wrong in Index" });
    }
  }

  static async store(req, res) {
    try {
      const authUser = req.user;
      const { title, content } = req.body;

      const post = await prisma.post.create({
        data: {
          user_id: authUser.id,
          title,
          content,
        },
      });

      return res.json({ message: "Post created successfully", post });
    } catch (error) {
      return res.status(500).json({ message: "Server error store failed" });
    }
  }
}

export default PostController;
