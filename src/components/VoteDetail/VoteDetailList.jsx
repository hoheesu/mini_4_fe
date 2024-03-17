import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { detailVotePost } from "../../apis/voteApi";
import VoteDetail from "./VoteDetail";
import EditVoteDetail from "./EditVoteDetail";

function VoteDetailList() {
  const [voteDetail, setVoteDetail] = useState();
  const [postEdit, setPostEdit] = useState(false);
  const [isVote, setIsVote] = useState(false);

  const { id } = useParams();
  let jwt = jwtDecode(localStorage.getItem("accessToken").substring(7));
  const userId = useRef(jwt.id);

  const onClickEditVoteDetail = () => {
    confirm("수정하시겠습니까?") ? setPostEdit(true) : setPostEdit(false);
  };

  useEffect(() => {
    (async () => {
      const result = await detailVotePost(id);
      for (const option of result.options) {
        for (const voteHistory of option.voteHistory) {
          if (voteHistory.userId === userId.current) {
            setIsVote(true);
          }
        }
      }
      setVoteDetail(result);
    })();
  }, [id]);
  console.log(voteDetail);
  // useEffect(() => {
  //   if (voteDetail) {
  //     const optionDetail = voteDetail.options.map((option) => {
  //       return option.content;
  //     });
  //     console.log(optionDetail);
  //   }
  // }, [voteDetail]);
  return (
    <>
      {!voteDetail ? (
        <p>로딩중...</p>
      ) : !postEdit ? (
        <VoteDetail
          voteDetail={voteDetail}
          onClickEditVoteDetail={onClickEditVoteDetail}
        />
      ) : (
        <EditVoteDetail voteDetail={voteDetail} />
        // <>
        //   <input value={voteDetail.title} />
        //   <input type="text" value={voteDetail.content} />
        //   <input type="date" value={dateFormatter(voteDetail.startDate)} />
        //   <input type="date" value={dateFormatter(voteDetail.endDate)} />
        //   <ul>
        //     {voteDetail.options.map((optionItem) => {
        //       return (
        //         <li key={optionItem.id}>
        //           <input value={optionItem.content} />
        //         </li>
        //       );
        //     })}
        //   </ul>
        //   <button>수정 완료 </button>
        //   <button>수정 취소 </button>
        // </>
      )}
      {isVote ? <p>이미 투표를 하셨습니다.</p> : null}
    </>
  );
}

export default VoteDetailList;
