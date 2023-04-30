import { useState } from "react";
import useFetchedData from "../../useFetchedData";
import Pagination from "../Pagination/pagination";
import Card from "../Card/card";

const pageSize = 3;
function OurTeam() {
  const [page, setPage] = useState(1);
  const [isLoading, programmers] = useFetchedData({ page, pageSize });

  return (
    <div
      className="d-flex row align-items-center justify-content-center mx-5"
      style={{ height: "100vh" }}
      dir="rtl"
    >
      {isLoading && (
        <div className="d-flex">
          <div className="spiner-border"></div>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="d-flex">
            {programmers.data.map(({ id, ...programmer }) => {
              return (
                <div className="col-4" key={id}>
                  <Card {...programmer} />
                </div>
              );
            })}
          </div>
          <div className="row mt-n5">
            <Pagination
              pages={Math.ceil(programmers.totalRecords / pageSize)}
              setPage={setPage}
              page={page}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default OurTeam;
