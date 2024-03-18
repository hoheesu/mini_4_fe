import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createComment,
  deleteComment,
  getComment,
  updateComment,
} from "../../apis/comment";
import {
  __createComment,
  __deleteComment,
  __getComments,
  __updateComment,
} from "../../redux/modules/commentSlice";
import { useDispatch } from "react-redux";

export const useGetComment = (postId) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComment(postId),
  });
};

export const useCreateComment = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: createComment,
    onSuccess: (data) => {
      dispatch(__createComment(data));
    },
  });
};

export const useDeleteComment = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: deleteComment,
    onSuccess: (data) => {
      dispatch(__deleteComment(data));
    },
  });
};

export const useUpdateComment = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: updateComment,
    onSuccess: (data) => {
      dispatch(__updateComment(data));
    },
  });
};
