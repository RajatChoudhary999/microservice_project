import prisma from "../config/db.config.js";

class PostController {
  static async index(req, res) {
    try {
      const posts = await prisma.post.findMany({});
      return res.json({ posts });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong in Index" });
    }
  }

  async store() {}
}

export default PostController;
