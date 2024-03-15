import React, { useEffect, useState } from "react";
import { getVoteListAll } from "../apis/voteApi";
import { useNavigate } from "react-router-dom";
import dateFormatter from "../util/dateFormatter";

function VoteList() {
  const [voteList, setVoteList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await getVoteListAll();
      setVoteList(result);
    })();
  }, []);

  return (
    <ul>
      {voteList.map((voteItem) => {
        return (
          <li key={voteItem.id}>
            <button onClick={() => navigate(`/vote/detail/${voteItem.id}`)}>
              <p>{voteItem.title}</p>
              {/* <p>{voteItem.content}</p> */}
              {/* <p>{dateFormatter(voteItem.endDate)}</p> */}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default VoteList;
