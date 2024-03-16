import React, { useEffect, useState } from "react";
import { getVoteListAll } from "../apis/voteApi";
import VoteList from "./VoteList";

function VoteListMain() {
  const [voteList, setVoteList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getVoteListAll();
      setVoteList(result);
    })();
  }, []);
  console.log(voteList);
  const [listCategory, setListCategory] = useState();
  return (
    <>
      <div>
        <button value="close" onClick={(e) => setListCategory(e.target.value)}>
          종료된 투표{listCategory === "close" ? "✅" : null}
        </button>
        <button
          value="ongoing"
          onClick={(e) => setListCategory(e.target.value)}
        >
          진행중인 투표{listCategory === "ongoing" ? "✅" : null}
        </button>
        <button
          value="pending"
          onClick={(e) => setListCategory(e.target.value)}
        >
          투표 예정{listCategory === "pending" ? "✅" : null}
        </button>
      </div>
      {voteList ? (
        <VoteList listCategory={listCategory} voteList={voteList} />
      ) : (
        <p>로딩중</p>
      )}
    </>
  );
}

export default VoteListMain;
