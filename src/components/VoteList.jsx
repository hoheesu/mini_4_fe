import React, { useEffect, useState } from "react";
import { getVoteListAll } from "../apis/voteApi";
import dateFormatter from "../util/dateFormatter";

function VoteList() {
  const [voteList, setVoteList] = useState([]);
  useEffect(() => {}, []);
  useEffect(() => {
    (async () => {
      const result = await getVoteListAll();
      setVoteList(result);
    })();
  }, []);
  console.log(voteList);

  return (
    <ul>
      {voteList.map((voteItem) => {
        return (
          <li key={voteItem.id}>
            <p>{voteItem.title}</p>
            <p>{voteItem.content}</p>
            <p>{dateFormatter(voteItem.endDate)}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default VoteList;
