import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as CommentAction from "../store/actions/comment_action";

export const deleteComment = async (dispatch, commentId, gameId) => {
  let body = {
    commentId: commentId,
    gameId: gameId,
  };

  dispatch(CommentAction.deleteComment(body));
};

export const editeComment = async (dispatch, commentId, gameId) => {
  const inputValue = prompt();
  let body = {
    commentId: commentId,
    gameId: gameId,
    content: inputValue,
  };

  dispatch(CommentAction.editeComment(body));

  //   const request = await axios
  //     .post(`/api/comments/edite/${commentId}`, body)
  //     .then((response) => response.data);
  //   console.log(request);
};
