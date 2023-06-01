import { useState } from "react";
import useFetchedData from "../../useFetchedData";
import Pagination from "../Pagination/pagination";
import Card from "../Card/card";

const pageSize = 3;

function OurTeam() {
  const [page, setPage] = useState(1);
  const [isLoading, programmers] = useFetchedData({ page, pageSize });

  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        {isLoading && (
          <div className="d-flex">
            <div className="spinner-border"></div>
          </div>
        )}
        {!isLoading && (
          <>
            {programmers.data.map(({ id, ...programmer }) => (
              <div className="col-md-4 col-xl-4 mb-4" key={id}>
                <Card {...programmer} />
              </div>
            ))}
            <div className="row mt-5">
              <div className="col">
                <Pagination
                  pages={Math.ceil(programmers.totalRecords / pageSize)}
                  setPage={setPage}
                  page={page}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OurTeam;
