import { useMutation, useQuery } from "@tanstack/react-query";
import {
  detailVotePost,
  editVotePost,
  getVoteListAll,
  removeVotePost,
} from "../../apis/voteApi";
import { useIsEditStore, useListStore } from "./voteZustand";
import { useParams } from "react-router-dom";

export const useGetListsAll = () => {
  return useQuery({
    queryKey: ["listsAll"],
    queryFn: () => getVoteListAll(),
  });
};

export const useGetDetails = (postId) => {
  return useQuery({
    queryKey: ["detailList", postId],
    queryFn: () => detailVotePost(postId),
  });
};

export const useUpdateDetails = () => {
  const { id } = useParams();
  return useMutation({
    mutationFn: editVotePost,
    onSuccess: () => {
      // setPostEdit(false);
      window.location.reload();
    },
  });
};

export const useDeleteDetails = () => {
  const setDeleteListState = useListStore((state) => state.setDeleteList);
  return useMutation({
    mutationFn: removeVotePost,
    onSuccess: (id) => {
      setDeleteListState(id);
      window.location.reload();
    },
  });
};
