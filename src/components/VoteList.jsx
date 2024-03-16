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

  console.log(voteList);

  return (
    <ul>
      <select>
        <option value="endTime">종료시간순</option>
        <option value="startTime">시작시간순</option>
      </select>
      {voteList
        .sort((a, b) => new Date(a.endDate) - new Date(b.endDate))
        .map((voteItem) => {
          if (new Date(voteItem.endDate).getTime() > new Date()) {
            return (
              <li key={voteItem.id}>
                <button onClick={() => navigate(`/vote/detail/${voteItem.id}`)}>
                  <p>{voteItem.title}</p>
                  {/* <p>{voteItem.content}</p> */}
                  {/* <p>{dateFormatter(voteItem.endDate)}</p> */}
                </button>
              </li>
            );
          } else {
            // return (
            //   <li key={voteItem.id}>
            //     <button onClick={() => navigate(`/vote/detail/${voteItem.id}`)}>
            //       <p>{voteItem.title}</p>
            //     </button>
            //     <p>시간이 지난 투표</p>
            //   </li>
            // );
          }
        })}
    </ul>
  );
}

export default VoteList;
