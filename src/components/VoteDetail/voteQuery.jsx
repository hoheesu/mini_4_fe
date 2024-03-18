import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  detailVotePost,
  editVotePost,
  getVoteListAll,
  removeVotePost,
  userVoteOption,
} from "../../apis/voteApi";
import { useIsEditStore } from "./voteZustand";
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

export const useUpdateDetails = (postId) => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const setPostEdit = useIsEditStore((state) => state.setIsEdit);

  return useMutation({
    mutationFn: editVotePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["detailList", postId]);
      setPostEdit(false);
    },
  });
};

export const useDeleteDetails = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeVotePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["listsAll"]);
    },
  });
};

export const useVoteOptions = () => {
  return useMutation({
    mutationFn: userVoteOption,
    onSuccess: (data) => {
      alert(data);
      window.location.reload();
    },
    onError: (err) => {
      alert("이미 이 투표에 참여하셨습니다.");
    },
  });
};
