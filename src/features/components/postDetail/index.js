import React from "react";
import { Author } from "../author.component";
import { PostDetailBody } from "./post-detail-body.component";
import { PostSocial } from "../post-social.component";
import { Divider, ScrollView } from "native-base";

const PostDetail = ({ post = {} }) => {
  const {
    author = { name: "Murat", surname: "Şirin" },
    title = "What is Lorem Ipsum?",
    content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photos = [
      "https://sm.ign.com/t/ign_tr/photo/default/eldenring-01-4k-1623357441326_39w4.1080.jpg",
    ],
    postDate = "25.02.2022 16.00",
    likeCount = "384",
    commentCount = "24",
    comments = [{}],
  } = post;

  return (
    <ScrollView>
      <Author name={author.name} surname={author.surname} postDate={postDate} />
      <Divider my="2" />
      <PostDetailBody title={title} photo={photos[0]} content={content} />
      <Divider my="2" />
      <PostSocial likeCount={likeCount} commentCount={commentCount} />
    </ScrollView>
  );
};

export default PostDetail;
