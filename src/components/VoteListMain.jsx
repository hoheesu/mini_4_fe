import React, { useEffect, useState } from "react";
import { getVoteListAll } from "../apis/voteApi";
import VoteList from "./VoteList";
import { create } from "zustand";

const listStore = (set) => ({
  listsAll: [],
  setList: (list) => set(() => ({ listsAll: list })),
});
export const useListStore = create(listStore);

function VoteListMain() {
  const [isLoading, setIsLoading] = useState(false);
  const [listCategory, setListCategory] = useState("ongoing");

  const setList = useListStore((state) => state.setList);

  useEffect(() => {
    (async () => {
      setIsLoading(false);
      const result = await getVoteListAll();
      setList(result);
      setIsLoading(true);
    })();
  }, []);

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
      {isLoading ? <VoteList listCategory={listCategory} /> : <p>로딩중 ...</p>}
    </>
  );
}

export default VoteListMain;
