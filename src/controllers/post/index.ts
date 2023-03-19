import { Request, Response } from "express";
import { postRepository } from "../../models";

export const createPost = async (req: Request, res: Response) => {
  const {
    body: { title, content, author },
  } = req;

  const post = await postRepository.create({ title, content, author });
  const response = await postRepository.save(post);

  res.status(200).json({ success: true, post: response });
};

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await postRepository.find({
    relations: {
      author: true,
    },
  });

  //   const posts = await postRepository
  //     .createQueryBuilder("post")
  //     .select("post.title")
  //     .leftJoinAndSelect("post.author", "user")
  //     .getMany();

  res.status(200).json({ success: true, posts });
};
